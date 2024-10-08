import db from '@/prisma/db';
import { Athlete } from '@prisma/client';

import { ATHLETES_PER_PAGE } from '@/lib';

export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

interface FindAthletesParams {
  offset?: number;
  limit?: number;
}

export function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
}: FindAthletesParams) {
  return db.athlete.findMany({
    skip: offset,
    take: limit,
    include: {
      sport: { select: { name: true } },
    },
  });
}
