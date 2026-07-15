import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import crypto from 'crypto';
import { sendPasswordResetEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP settings are missing in .env');
      return NextResponse.json({ error: 'E-posta servisi yapılandırılmamış. Lütfen yöneticiye başvurun.' }, { status: 500 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Return success even if user not found to prevent email enumeration
      return NextResponse.json({ message: 'If an account exists, a reset link has been sent.' });
    }

    const token = crypto.randomUUID();
    const expires = new Date(Date.now() + 3600000); // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: token,
        resetTokenExpires: expires,
      },
    });

    const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;
    
    const emailResult = await sendPasswordResetEmail(user.email!, user.name || 'User', resetLink);
    
    if (!emailResult.success) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ message: 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.' });
  } catch (error: any) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ error: 'İşlem sırasında bir hata oluştu: ' + (error.message || 'Bilinmeyen hata') }, { status: 500 });
  }
}
