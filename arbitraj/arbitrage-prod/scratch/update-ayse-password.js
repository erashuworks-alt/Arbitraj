const { PrismaClient } = require('../generated/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const email = 'aysearucu8@gmail.com';
  const password = 'i1s2g3a4d5';
  const passwordHash = await bcrypt.hash(password, 10);
  
  await prisma.user.update({
    where: { email: email },
    data: {
      password_hash: passwordHash,
      role: 'admin',
      status: 'ACTIVE'
    }
  });
  
  console.log(`aysearucu8@gmail.com şifresi güncellendi.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
