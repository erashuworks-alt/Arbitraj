import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialCMSData = [
  { key: 'hero.title', value: 'Hassas Arbitraj ile Getiriyi Maksimize Edin', description: 'Main hero section title' },
  { key: 'hero.subtitle', value: 'Otomatik CS2 piyasa arbitrajı için profesyonel bir yürütme motoru. Güvenli, hızlı ve kurumsal ölçekli likidite için optimize edilmiştir.', description: 'Main hero section subtitle' },
  { key: 'hero.cta.primary', value: 'Döngüyü Başlat', description: 'Primary Call to Action button text' },
  { key: 'hero.cta.secondary', value: 'Nasıl Çalışır', description: 'Secondary Call to Action button text' },
  { key: 'hero.cta.ghost', value: 'Demo Gör', description: 'Ghost Call to Action button text' },
  { key: 'about.title', value: 'Bu platform ne yapıyor?', description: 'About section title' },
  { key: 'about.description', value: 'Bu platform, Steam ve CSFloat arasında fiyat farklarını analiz ederek kârlı al-sat fırsatlarını otomatik olarak tespit eder.', description: 'About section description' },
  { key: 'footer.copyright', value: '© 2026 Erashu Engine. Tüm hakları saklıdır.', description: 'Footer copyright text' },
];

async function main() {
  console.log('Seeding initial CMS content...');
  for (const item of initialCMSData) {
    await prisma.cMSContent.upsert({
      where: { key: item.key },
      update: {}, // Don't overwrite if it exists
      create: item,
    });
  }
  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
