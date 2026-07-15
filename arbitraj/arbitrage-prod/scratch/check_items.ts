import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const items = await prisma.profitableItem.findMany({
    orderBy: { intelligence_score: 'desc' },
    take: 10
  });
  
  const total = await prisma.item.count();
  
  console.log(JSON.stringify({ items, total }, null, 2));
}

main();
