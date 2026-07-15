import express from 'express';
import axios from 'axios';
import { workerLogger } from './shared/infra/logger';
import { config } from './shared/infra/config';
import prisma from './shared/infra/prisma';

const app = express();
app.use(express.json());

const subscribers = [
    { url: `${config.urls.sniper}/trigger`, events: ['MARKET_UPDATED', 'RISK_TRIGGERED'] },
    { url: `${config.urls.riskEngine}/events`, events: ['MARKET_UPDATED', 'SYSTEM_ERROR'] },
    { url: `${config.urls.ui}/api/internal/emit`, events: ['OPPORTUNITY_DETECTED', 'RISK_TRIGGERED', 'TRADE_EXECUTED'] }
];

const client = axios.create({ timeout: 2000 });

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'event-hub' }));

const eventQueue: any[] = [];
let isProcessing = false;

async function processQueue() {
    if (isProcessing || eventQueue.length === 0) return;
    isProcessing = true;

    while (eventQueue.length > 0) {
        const { event, payload, dbEventId } = eventQueue.shift();
        const targets = subscribers.filter(s => s.events.includes(event));

        await Promise.allSettled(targets.map(target => client.post(target.url, { event, payload })))
            .then(async () => {
                if (dbEventId) {
                    await prisma.streamingEvent.update({
                        where: { id: dbEventId },
                        data: { status: 'SENT' }
                    }).catch(() => {});
                }
            });
    }

    isProcessing = false;
}

app.post('/publish', async (req, res) => {
    const { event, payload } = req.body;
    res.sendStatus(200); 
    
    let dbEventId: string | null = null;
    
    try {
        const dbEvent = await prisma.streamingEvent.create({
            data: {
                type: event,
                payload: JSON.stringify(payload),
                status: 'PENDING'
            }
        });
        dbEventId = dbEvent.id;
    } catch (e) {
        workerLogger.error('Event Hub: Persistence failure');
    }

    // Add to queue for processing
    eventQueue.push({ event, payload, dbEventId });
    processQueue();
});

app.listen(config.ports.eventHub, () => {
    workerLogger.error(`EVENT HUB: active on port ${config.ports.eventHub}`);
});
