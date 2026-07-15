const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.supportTicket.count();
    console.log('SupportTicket count:', count);
  } catch (e) {
    console.error('Error accessing SupportTicket:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
