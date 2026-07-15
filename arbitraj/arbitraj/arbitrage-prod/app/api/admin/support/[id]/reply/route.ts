import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { sendSupportReply } from '@/lib/email';

const prisma = new PrismaClient();

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { reply } = await req.json();
    const { id } = params;

    if (!reply) {
      return NextResponse.json({ message: 'Reply is required' }, { status: 400 });
    }

    await prisma.$executeRawUnsafe(
      `UPDATE support_tickets SET reply = ?, status = ?, updated_at = ? WHERE id = ?`,
      reply, 'CLOSED', new Date().toISOString(), id
    );

    const tickets: any = await prisma.$queryRawUnsafe(
      `SELECT * FROM support_tickets WHERE id = ? LIMIT 1`,
      id
    );
    const ticket = tickets[0];

    if (ticket) {
      // REAL EMAIL SENDING
      await sendSupportReply(ticket.email, ticket.name, ticket.message, reply);
    }

    return NextResponse.json({ success: true, ticket });
  } catch (error) {
    console.error('Reply error:', error);
    return NextResponse.json({ message: 'Internal error' }, { status: 500 });
  }
}
