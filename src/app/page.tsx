import { Suspense } from 'react';

import { AthletesList } from '@/app/_components';
import { findAthletes, findSports } from '@/lib';

export default async function Home() {
  const athletes = await findAthletes();

  const sports = await findSports();
  console.log(sports);

  return (
    <main className='container p-4'>
      <Suspense key={'key'} fallback={<div>Carregando...</div>}>
        <AthletesList initialData={athletes} />
      </Suspense>
    </main>
  );
}
