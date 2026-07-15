const { PrismaClient } = require('../generated/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const email = 'denis2001batak@gmail.com';
  const password = '2001Denis';
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
      name: 'Denis Admin',
      password_hash: passwordHash,
      role: 'admin',
      status: 'ACTIVE'
    }
  });
  
  console.log(`Yeni admin eklendi: ${user.email}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
