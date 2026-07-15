import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const content = await prisma.cMSContent.findMany();
    // Convert array of objects to a key-value dictionary
    const dict = content.reduce((acc: any, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    
    return NextResponse.json(dict);
  } catch (error) {
    console.error('Error fetching CMS content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { key, value } = body;

    if (!key || value === undefined) {
      return NextResponse.json({ error: 'Key and value are required' }, { status: 400 });
    }

    const updatedContent = await prisma.cMSContent.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });

    return NextResponse.json(updatedContent);
  } catch (error) {
    console.error('Error updating CMS content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
