import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [dailyVisitors, totalSessions, topPages, rawHourlyTraffic] = await Promise.all([
      prisma.analyticsLog.count({
        where: { timestamp: { gte: today } }
      }),
      prisma.sessionLog.count({
        where: { start_time: { gte: today } }
      }),
      prisma.analyticsLog.groupBy({
        by: ['page'],
        _count: { page: true },
        orderBy: { _count: { page: 'desc' } },
        take: 5
      }),
      prisma.$queryRaw`
        SELECT strftime('%H', timestamp) as hour, COUNT(*) as count
        FROM analytics_logs
        WHERE timestamp >= ${today.toISOString()}
        GROUP BY hour
        ORDER BY hour ASC
      ` as Promise<any[]>
    ]);

    // Map raw hourly data to full 24-hour array
    const hourlyTrafficMap = new Map((rawHourlyTraffic || []).map(h => [h.hour, Number(h.count)]));
    const hourlyTraffic = Array.from({ length: 24 }).map((_, i) => {
      const hourStr = i.toString().padStart(2, '0');
      return {
        hour: `${hourStr}:00`,
        visits: hourlyTrafficMap.get(hourStr) || 0
      };
    });

    return NextResponse.json({
      dailyVisitors,
      totalSessions,
      topPages: topPages.map(p => ({ path: p.page, views: p._count.page })),
      hourlyTraffic
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
