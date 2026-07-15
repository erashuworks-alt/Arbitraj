const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    console.log('Starting test...');
    const ticket = await prisma.supportTicket.create({
      data: {
        name: 'Debug Test',
        email: 'debug@gmail.com',
        message: 'This is a test message',
        status: 'OPEN'
      }
    });
    console.log('Success:', ticket);
  } catch (e) {
    console.error('FAILED:', e.message);
    console.error('STACK:', e.stack);
  } finally {
    await prisma.$disconnect();
  }
}

test();
