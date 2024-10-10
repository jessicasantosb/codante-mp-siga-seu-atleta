import { Suspense } from 'react';

import { AthletesList, AthletesListSkeleton, Filters } from '@/app/_components';
import { findSports } from '@/lib/sports';

export default async function Home({
  searchParams,
}: {
  searchParams: { q?: string; category?: 'all' | 'olympic' | 'paralympic' };
}) {
  const searchText = searchParams?.q || '';
  const category = searchParams?.category || 'all';

  const sports = await findSports();
  console.log(sports);

  return (
    <main className='container p-4 flex flex-col gap-10'>
      <Filters />

      <Suspense key={searchText + category} fallback={<AthletesListSkeleton />}>
        <AthletesList filters={{ searchText, category }} />
      </Suspense>
    </main>
  );
}
