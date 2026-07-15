const { PrismaClient } = require('../generated/client'); // Use our custom client
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const email = 'erashugaming@gmail.com';
  const password = 'i1s2g3a4d5';
  const passwordHash = await bcrypt.hash(password, 10);
  
  const user = await prisma.user.upsert({
    where: { email: email },
    update: {
      password_hash: passwordHash,
      role: 'admin',
      status: 'ACTIVE'
    },
    create: {
      email: email,
      name: 'Super Admin',
      password_hash: passwordHash,
      role: 'admin',
      status: 'ACTIVE'
    }
  });
  
  console.log(`Admin kullanıcısı güncellendi/oluşturuldu: ${user.email}`);
  console.log(`Şifre başarıyla ayarlandı.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
