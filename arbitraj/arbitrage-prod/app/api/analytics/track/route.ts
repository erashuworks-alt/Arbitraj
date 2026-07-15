import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Prevent multiple instances in dev
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { type, ip, userAgent, page, browser, deviceType } = data;

    if (type === 'pageview') {
      await prisma.analyticsLog.create({
        data: {
          ip: ip || 'unknown',
          user_agent: userAgent || 'unknown',
          page: page || '/',
        }
      });
    } else if (type === 'session') {
      // Basic session tracking logic - check if session exists recently
      const recentSession = await prisma.sessionLog.findFirst({
        where: {
          ip: ip || 'unknown',
          start_time: {
            gte: new Date(Date.now() - 30 * 60 * 1000) // 30 minutes
          }
        }
      });

      if (!recentSession) {
        await prisma.sessionLog.create({
          data: {
            ip: ip || 'unknown',
            browser: browser || 'unknown',
            device_type: deviceType || 'unknown',
          }
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json({ success: false, error: 'Failed to track' }, { status: 500 });
  }
}
