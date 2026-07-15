const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const partners = [
    {
      name: "Liquid CS",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=liquid",
      link: "https://twitter.com/liquid_cs",
    },
    {
      name: "SkinBaron",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=skinbaron",
      link: "https://skinbaron.de",
    },
    {
      name: "CSFloat",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=csfloat",
      link: "https://csfloat.com",
    },
    {
      name: "Anomaly",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=anomaly",
      link: "https://twitter.com/anomalyxd",
    }
  ];

  console.log('Seeding partners...');

  for (const partner of partners) {
    await prisma.partner.upsert({
      where: { id: partner.name.toLowerCase().replace(/\s/g, '-') },
      update: partner,
      create: {
        id: partner.name.toLowerCase().replace(/\s/g, '-'),
        ...partner
      }
    });
  }

  console.log('Seed complete.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
