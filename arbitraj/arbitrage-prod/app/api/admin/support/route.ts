import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tickets = await prisma.$queryRawUnsafe(
      `SELECT * FROM support_tickets ORDER BY created_at DESC`
    );
    return NextResponse.json(tickets);
  } catch (error: any) {
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
