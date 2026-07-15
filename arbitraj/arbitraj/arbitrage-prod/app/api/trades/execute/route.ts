import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { opportunityId, amount, dryRun } = body;

    console.log(`[TRADE] Executing trade for ${opportunityId} with amount ${amount} (DryRun: ${dryRun})`);

    // Mock successful trade
    return NextResponse.json({
      success: true,
      orderId: `LIVE-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      message: dryRun ? 'Dry run successful' : 'Trade executed successfully',
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Invalid request body',
    }, { status: 400 });
  }
}
