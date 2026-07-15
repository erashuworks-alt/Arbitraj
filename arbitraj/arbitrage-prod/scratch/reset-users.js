const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('12345678', 10);
  
  const result = await prisma.user.updateMany({
    data: {
      status: 'ACTIVE',
      password_hash: passwordHash
    }
  });
  
  console.log(`${result.count} kullanıcı başarıyla güncellendi. Tüm şifreler: 12345678, Tüm durumlar: ACTIVE`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
