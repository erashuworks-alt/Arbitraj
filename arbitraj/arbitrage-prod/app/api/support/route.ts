import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log('Prisma keys:', Object.keys(prisma));
    const availableModels = Object.keys(prisma).filter(k => !k.startsWith('$') && !k.startsWith('_'));
    console.log('Available models:', availableModels);

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    if (!email.toLowerCase().endsWith('@gmail.com')) {
      return NextResponse.json({ message: 'Only @gmail.com addresses are allowed' }, { status: 400 });
    }

    const ticketId = `st_${Math.random().toString(36).substring(2, 11)}`;
    const now = new Date().toISOString();

    await prisma.$executeRawUnsafe(
      `INSERT INTO support_tickets (id, name, email, message, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      ticketId, name, email, message, 'OPEN', now, now
    );

    return NextResponse.json({ success: true, ticketId }, { status: 201 });
  } catch (error: any) {
    const errorLog = `[${new Date().toISOString()}] ${error.message}\n${error.stack}\n\n`;
    fs.appendFileSync(path.join(process.cwd(), 'support_error.log'), errorLog);
    console.error('Support ticket error:', error);
    return NextResponse.json({ 
      message: 'Internal error', 
      details: error.message
    }, { status: 500 });
  }
}
