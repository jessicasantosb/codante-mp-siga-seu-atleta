import { Suspense } from 'react';

import { AthletesList, AthletesListSkeleton, Filters } from '@/app/_components';
import { findSports } from '@/lib/sports';
import { Categories } from '@/lib/types/athletes';

export default async function Home({
  searchParams,
}: {
  searchParams: {
    q?: string;
    category?: Categories;
    sport?: string;
  };
}) {
  const searchText = searchParams?.q || '';
  const category = searchParams?.category;
  const sport = searchParams?.sport;

  const sports = await findSports();

  return (
    <main className='container p-4 flex flex-col gap-10'>
      <Filters sports={sports} />

      <Suspense
        key={searchText + category + sport}
        fallback={<AthletesListSkeleton />}
      >
        <AthletesList filters={{ searchText, category, sport }} />
      </Suspense>
    </main>
  );
}
