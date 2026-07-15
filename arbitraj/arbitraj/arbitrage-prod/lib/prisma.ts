import { PrismaClient } from '../generated/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Force a new instance because global instance might be stale after schema changes
export const prisma = new PrismaClient({
    log: ['error'],
  });

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
