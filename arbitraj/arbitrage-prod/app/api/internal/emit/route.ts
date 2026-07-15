import { NextResponse, NextRequest } from 'next/server';
import marketEvents, { MarketEventType } from '@/lib/events';

export async function POST(req: NextRequest) {
  try {
    const { type, payload } = await req.json();

    // Map internal types to standardized event bus types
    if (Object.values(MarketEventType).includes(type as MarketEventType)) {
        marketEvents.dispatch(type as MarketEventType, payload);
    } else {
        // Legacy support
        if (type === 'opportunity') marketEvents.dispatch(MarketEventType.OPPORTUNITY_DETECTED, payload);
        if (type === 'pulse') marketEvents.dispatch(MarketEventType.MARKET_PULSE, payload);
        if (type === 'remove_opportunity') marketEvents.dispatch(MarketEventType.OPPORTUNITY_EXPIRED, payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}
