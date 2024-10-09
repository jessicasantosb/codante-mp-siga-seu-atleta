'use server';

import db from '@/prisma/db';
import { Athlete } from '@prisma/client';

import { ATHLETES_PER_PAGE } from '@/lib/constants';

export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

interface FindAthletesParams {
  offset?: number;
  limit?: number;
  searchText?: string;
  category?: 'all' | 'paralympic' | 'olympic';
}

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
  searchText = '',
  category = 'all',
}: FindAthletesParams) {
  const paralympic =
    category === 'all' || category === null
      ? undefined
      : category === 'paralympic';

  return db.athlete.findMany({
    skip: offset,
    take: limit,
    include: { sport: { select: { name: true } } },
    where: {
      AND: [
        {
          OR: [
            { instagramName: { contains: searchText } },
            { instagramBio: { contains: searchText } },
          ],
        },
        { paralympic },
      ],
    },
  });
}
