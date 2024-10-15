'use server';

import db from '@/prisma/db';
import { Athlete } from '@prisma/client';

import { ATHLETES_PER_PAGE } from '@/lib/constants';
import { Categories, Dir, Sort } from './types/athletes';

export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

interface FindAthletesParams {
  offset?: number;
  limit?: number;
  searchText?: string;
  category?: Categories;
  sport?: string;
  sort?: Sort;
  dir: Dir;
}

function getOrderBy(
  sort: FindAthletesParams['sort'],
  dir: FindAthletesParams['dir']
) {
  if (sort === 'followers') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return { instagramFollowersCount: dir || 'desc' } as any;
  }
  if (sort === 'name') return { instagramName: dir || 'asc' };
  return { instagramFollowersCount: 'desc' };
}

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
  searchText = '',
  category,
  sport,
  sort,
  dir,
}: FindAthletesParams) {
  const paralympic = category ? category === 'paralympic' : undefined;

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
        { sport: { code: sport } },
      ],
    },
    orderBy: getOrderBy(sort, dir),
  });
}
