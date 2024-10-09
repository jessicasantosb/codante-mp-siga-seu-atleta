import { Suspense } from 'react';

import { AthletesList, Filters } from '@/app/_components';
import { findAthletes } from '@/lib/athletes';
import { findSports } from '@/lib/sports';

export default async function Home() {
  const athletes = await findAthletes({});

  const sports = await findSports();
  console.log(sports);

  return (
    <main className='container p-4 flex flex-col gap-10'>
      <Filters />

      <Suspense key={'key'} fallback={<div>Carregando...</div>}>
        <AthletesList initialData={athletes} />
      </Suspense>
    </main>
  );
}
