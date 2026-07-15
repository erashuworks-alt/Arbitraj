const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create mock items
  await prisma.item.createMany({
    data: [
      { item_name: "AK-47 | Slate (Minimal Wear)", steam_price: 12.50, csfloat_price: 14.80, volume: 1500 },
      { item_name: "Desert Eagle | Printstream (Field-Tested)", steam_price: 58.20, csfloat_price: 45.00, volume: 300 },
      { item_name: "M4A1-S | Mecha Industries (Factory New)", steam_price: 32.00, csfloat_price: 38.50, volume: 120 },
    ],
  });

  // Create a mock admin user
  await prisma.user.create({
    data: {
      email: 'admin@arbitrage.com',
      password_hash: 'hashed_password_here',
      role: 'admin',
    },
  });

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
