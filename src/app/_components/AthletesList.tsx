'use client';

import { Athlete } from '@prisma/client';

interface AthletesListProps {
  initialData: Athlete[];
}

export function AthletesList({ initialData }: AthletesListProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
      {initialData.map(({ id, name }) => (
        <h4 key={id}>{name}</h4>
      ))}
    </div>
  );
}
