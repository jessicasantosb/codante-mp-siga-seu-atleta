import { Suspense } from 'react';

import { AthletesList, AthletesListSkeleton, Filters } from '@/app/_components';
import { findSports } from '@/lib/sports';
import { Categories, Dir, Sort } from '@/lib/types/athletes';

export default async function Home({
  searchParams,
}: {
  searchParams: {
    q?: string;
    category?: Categories;
    sport?: string;
    sort?: Sort;
    dir?: Dir;
  };
}) {
  const searchText = searchParams?.q || '';
  const category = searchParams?.category;
  const sportCode = searchParams?.sport;
  const sort = searchParams?.sort;
  const dir = searchParams?.dir;

  const sports = await findSports();

  return (
    <main className='p-4 flex flex-col gap-10'>
      <Filters
        sports={sports}
        filtersParams={{ searchText, category, sportCode, sort, dir }}
      />

      <Suspense
        key={searchText + category + sportCode + sort + dir}
        fallback={<AthletesListSkeleton />}
      >
        <AthletesList
          filters={{ searchText, category, sportCode, sort, dir }}
        />
      </Suspense>
    </main>
  );
}
