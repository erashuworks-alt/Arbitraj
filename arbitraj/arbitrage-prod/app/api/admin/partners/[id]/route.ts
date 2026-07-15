import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    
    // Get the partner to delete their image if it exists
    const partner = await prisma.partner.findUnique({ where: { id } });
    
    if (partner && partner.logo && partner.logo.startsWith('/uploads/')) {
      try {
        const filePath = join(process.cwd(), 'public', partner.logo);
        await unlink(filePath);
      } catch (err) {
        console.warn('Failed to delete old image:', err);
      }
    }

    await prisma.partner.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting partner:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const link = formData.get('link') as string;
    const image = formData.get('image') as File | null;
    const logoUrl = formData.get('logoUrl') as string | null;
    const active = formData.get('active') === 'true';

    if (!name || !link) {
      return NextResponse.json({ error: 'Name and link are required' }, { status: 400 });
    }

    const updateData: any = { name, link, active };
    if (logoUrl) updateData.logo = logoUrl;

    if (image && image.name && image.size > 0) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const fileName = `${Date.now()}-${image.name.replace(/\s+/g, '-')}`;
      const uploadDir = join(process.cwd(), 'public', 'uploads');
      const filePath = join(uploadDir, fileName);
      
      try {
        await writeFile(filePath, buffer);
        updateData.logo = `/uploads/${fileName}`;
        
        // Delete old image
        const oldPartner = await prisma.partner.findUnique({ where: { id } });
        if (oldPartner && oldPartner.logo && oldPartner.logo.startsWith('/uploads/')) {
          try {
            await unlink(join(process.cwd(), 'public', oldPartner.logo));
          } catch (err) {
            console.warn('Failed to delete old image:', err);
          }
        }
      } catch (uploadError) {
        console.error('File upload failed:', uploadError);
        return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
      }
    }

    const partner = await prisma.partner.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(partner);
  } catch (error) {
    console.error('Error updating partner:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
