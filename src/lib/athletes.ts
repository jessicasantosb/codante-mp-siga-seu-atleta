'use server';

import db from '@/prisma/db';
import { Athlete } from '@prisma/client';

import { ATHLETES_PER_PAGE } from '@/lib/constants';
import { Categories, Dir, Sort } from '@/lib/types';

export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

interface FindAthletesParams {
  offset?: number;
  limit?: number;
  searchText?: string;
  category?: Categories;
  sportCode?: string;
  sort?: Sort;
  dir?: Dir;
}

function getOrderBy(
  sort: FindAthletesParams['sort'],
  dir: FindAthletesParams['dir']
) {
  if (sort === 'name') return { instagramName: dir || 'desc' };

  return { instagramFollowersCount: dir || 'desc' };
}

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
  searchText = '',
  category,
  sportCode,
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
        { instagramName: { contains: searchText } },
        { paralympic },
        { sport: { code: sportCode } },
      ],
    },
    orderBy: getOrderBy(sort, dir),
  });
}
