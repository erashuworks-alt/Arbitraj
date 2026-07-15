import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('video') as File | null;

    if (!file || !file.name) {
      return NextResponse.json({ error: 'No video file provided' }, { status: 400 });
    }

    const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Allowed: mp4, webm, ogg, mov' }, { status: 400 });
    }

    // Max 500MB
    if (file.size > 500 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Max 500MB.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), 'public', 'uploads', 'videos');
    await mkdir(uploadDir, { recursive: true });

    const fileName = `demo-${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const filePath = join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    const videoPath = `/uploads/videos/${fileName}`;

    // Save path to CMS
    await prisma.cMSContent.upsert({
      where: { key: 'hero.demoVideoUrl' },
      update: { value: videoPath },
      create: { key: 'hero.demoVideoUrl', value: videoPath },
    });
    await prisma.cMSContent.upsert({
      where: { key: 'hero.demoVideoType' },
      update: { value: 'local' },
      create: { key: 'hero.demoVideoType', value: 'local' },
    });

    return NextResponse.json({ success: true, path: videoPath });
  } catch (error) {
    console.error('Video upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
