'use client';

import { AthleteWithSport } from '@/lib';
import { AthleteCard } from './AthleteCard';

interface AthletesListProps {
  initialData: AthleteWithSport[];
}

export function AthletesList({ initialData }: AthletesListProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
      {initialData.map((athlete) => (
        <AthleteCard key={athlete.id} athlete={athlete} />
      ))}
    </div>
  );
}
