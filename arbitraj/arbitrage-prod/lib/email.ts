import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendPasswordResetEmail(to: string, userName: string, resetLink: string) {
  const mailOptions = {
    from: `"Güvenlik Ekibi" <${process.env.SMTP_USER}>`,
    to: to,
    subject: 'Şifre Sıfırlama Talebi',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
        <h2 style="color: #4f46e5;">Merhaba ${userName},</h2>
        <p style="color: #475569;">Hesabınız için şifre sıfırlama talebinde bulunuldu. Şifrenizi sıfırlamak için aşağıdaki butona tıklayabilirsiniz:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
            Şifremi Sıfırla
          </a>
        </div>
        
        <p style="color: #64748b; font-size: 14px;">
          Eğer bu talebi siz yapmadıysanız, bu e-postayı dikkate almayınız. Güvenliğiniz için bu link 1 saat süreyle geçerlidir.
        </p>
        
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        
        <p style="color: #94a3b8; font-size: 12px;">
          Buton çalışmıyorsa şu adresi tarayıcınıza yapıştırabilirsiniz:<br>
          <a href="${resetLink}" style="color: #4f46e5;">${resetLink}</a>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Password reset email failed:', error);
    return { success: false, error };
  }
}

export async function sendSupportReply(to: string, userName: string, originalMessage: string, replyMessage: string) {
  const mailOptions = {
    from: `"Destek Ekibi" <${process.env.SMTP_USER}>`,
    to: to,
    subject: 'Destek Talebiniz Hakkında Yanıt',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 10px;">
        <h2 style="color: #4f46e5;">Merhaba ${userName},</h2>
        <p style="color: #475569;">Destek talebiniz ekibimiz tarafından yanıtlandı.</p>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: bold; text-transform: uppercase;">Mesajınız:</p>
          <p style="margin: 5px 0 0 0; color: #334155; font-style: italic;">"${originalMessage}"</p>
        </div>
        
        <div style="background-color: #eef2ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4f46e5;">
          <p style="margin: 0; font-size: 12px; color: #4f46e5; font-weight: bold; text-transform: uppercase;">Ekibimizin Yanıtı:</p>
          <p style="margin: 10px 0 0 0; color: #1e1b4b; line-height: 1.6;">${replyMessage}</p>
        </div>
        
        <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
          Bizi tercih ettiğiniz için teşekkür ederiz.<br>
          <strong>Arbitraj Platformu Ekibi</strong>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}
