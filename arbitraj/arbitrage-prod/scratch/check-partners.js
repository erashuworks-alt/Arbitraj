const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const partners = await prisma.partner.findMany();
  console.log('Partners in DB:', JSON.stringify(partners, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
