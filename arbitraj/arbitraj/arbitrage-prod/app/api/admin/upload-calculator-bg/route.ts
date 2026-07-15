import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('media') as File | null;

    if (!file || !file.name) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const allowedTypes = [
      'video/mp4', 'video/webm', 'video/ogg', 'video/quicktime',
      'image/jpeg', 'image/png', 'image/webp', 'image/gif'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Allowed: mp4, webm, jpeg, png, webp, gif' }, { status: 400 });
    }

    // Max 100MB for background
    if (file.size > 100 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Max 100MB.' }, { status: 400 });
    }

    const isVideo = file.type.startsWith('video/');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), 'public', 'uploads', 'backgrounds');
    await mkdir(uploadDir, { recursive: true });

    const fileName = `calc-bg-${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const filePath = join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    const mediaPath = `/uploads/backgrounds/${fileName}`;

    // Save path and type to CMS
    await prisma.cMSContent.upsert({
      where: { key: 'calculator.bgUrl' },
      update: { value: mediaPath },
      create: { key: 'calculator.bgUrl', value: mediaPath },
    });
    
    await prisma.cMSContent.upsert({
      where: { key: 'calculator.bgType' },
      update: { value: isVideo ? 'local_video' : 'local_image' },
      create: { key: 'calculator.bgType', value: isVideo ? 'local_video' : 'local_image' },
    });

    return NextResponse.json({ success: true, path: mediaPath, type: isVideo ? 'local_video' : 'local_image' });
  } catch (error) {
    console.error('Background upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
