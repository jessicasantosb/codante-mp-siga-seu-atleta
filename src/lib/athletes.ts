import db from '@/prisma/db';

export function findAthletes() {
  return db.athlete.findMany({ take: 100 });
}
