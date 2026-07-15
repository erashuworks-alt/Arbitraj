import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { calculateArbitrage } from '@/lib/arbitrage-engine';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const items = await prisma.item.findMany();
    const opportunities = items.flatMap(item => calculateArbitrage({
      item_name: item.item_name,
      steam_price: item.steam_price,
      csfloat_price: item.csfloat_price,
      volume: item.volume
    }));

    return NextResponse.json({
      total_items: items.length,
      opportunities: opportunities,
      last_sync: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}
