import { NextRequest } from 'next/server';
import marketEvents from '@/lib/events';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      const onGlobalEvent = (eventData: { type: string, payload: any }) => {
        controller.enqueue(encoder.encode(`event: ${eventData.type}\ndata: ${JSON.stringify(eventData.payload)}\n\n`));
      };

      marketEvents.on('global_event', onGlobalEvent);

      req.signal.addEventListener('abort', () => {
        marketEvents.off('global_event', onGlobalEvent);
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
