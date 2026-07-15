import { NextResponse } from 'next/server';
import prisma from '@/infra/lib/prisma';

const cache = new Map<string, { data: any; ts: number }>();
const TTL = 30000;

export async function GET() {
  const hit = cache.get('arb');
  if (hit && Date.now() - hit.ts < TTL) return NextResponse.json(hit.data);

  try {
    const profitable = await prisma.profitableItem.findMany({
      where: { intelligence_score: { gte: 50 } },
      orderBy: { intelligence_score: 'desc' },
      take: 40,
    });

    const data = {
      profitable,
      total_count: profitable.length,
      timestamp: new Date().toISOString(),
    };
    cache.set('arb', { data, ts: Date.now() });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ profitable: [], total_count: 0 });
  }
}
