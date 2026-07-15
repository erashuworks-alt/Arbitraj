import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.cMSContent.upsert({
    where: { key: 'hero.demoVideoUrl' },
    update: { value: 'https://www.youtube.com/embed/PHd-3PSQ6X4' },
    create: { key: 'hero.demoVideoUrl', value: 'https://www.youtube.com/embed/PHd-3PSQ6X4' },
  });
  await prisma.cMSContent.upsert({
    where: { key: 'hero.demoVideoType' },
    update: { value: 'youtube' },
    create: { key: 'hero.demoVideoType', value: 'youtube' },
  });
  console.log('✅ Demo video URL set to https://www.youtube.com/embed/PHd-3PSQ6X4');
  await prisma.$disconnect();
}

main().catch(console.error);
