const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.update({
    where: { email: 'aysearucu8@gmail.com' },
    data: { role: 'admin' }
  });
  console.log(`Updated user ${user.email} to admin role.`);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
