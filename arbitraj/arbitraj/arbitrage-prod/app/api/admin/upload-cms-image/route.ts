import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const key = formData.get('key') as string | null;

    if (!file || !file.name) {
      return NextResponse.json({ error: 'Dosya seçilmedi' }, { status: 400 });
    }

    if (!key) {
      return NextResponse.json({ error: 'CMS anahtarı (key) belirtilmedi' }, { status: 400 });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Geçersiz dosya tipi. Sadece resimler yüklenebilir.' }, { status: 400 });
    }

    // Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Dosya çok büyük. Maksimum 5MB.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), 'public', 'uploads', 'cms');
    await mkdir(uploadDir, { recursive: true });

    const fileName = `${key.replace(/\./g, '-')}-${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const filePath = join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    const publicPath = `/uploads/cms/${fileName}`;

    // Save path to CMS
    await prisma.cMSContent.upsert({
      where: { key },
      update: { value: publicPath },
      create: { key, value: publicPath },
    });

    return NextResponse.json({ success: true, path: publicPath });
  } catch (error) {
    console.error('CMS Image upload error:', error);
    return NextResponse.json({ error: 'Yükleme başarısız' }, { status: 500 });
  }
}
