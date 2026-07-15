import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const partners = await prisma.partner.findMany({
      orderBy: { created_at: 'desc' }
    });
    return NextResponse.json(partners);
  } catch (error) {
    console.error('Error fetching partners:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const link = formData.get('link') as string;
    const image = formData.get('image') as File | null;
    const logoUrl = formData.get('logoUrl') as string | null;
    const active = formData.get('active') === 'true';

    if (!name || !link) {
      return NextResponse.json({ error: 'Name and link are required' }, { status: 400 });
    }

    let logoPath = logoUrl || '';

    if (image && image.name && image.size > 0) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const fileName = `${Date.now()}-${image.name.replace(/\s+/g, '-')}`;
      const uploadDir = join(process.cwd(), 'public', 'uploads');
      const filePath = join(uploadDir, fileName);
      
      // Ensure the directory exists
      try {
        await writeFile(filePath, buffer);
        logoPath = `/uploads/${fileName}`;
      } catch (uploadError) {
        console.error('File upload failed:', uploadError);
        return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
      }
    }

    const partner = await prisma.partner.create({
      data: {
        name,
        link,
        logo: logoPath,
        active,
      },
    });

    return NextResponse.json(partner);
  } catch (error) {
    console.error('Error creating partner:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
