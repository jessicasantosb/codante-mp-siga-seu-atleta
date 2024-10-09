'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { AthleteCard } from '@/app/_components';
import { AthleteWithSport, findAthletes } from '@/lib/athletes';
import { ATHLETES_PER_PAGE } from '@/lib/constants';

interface AthletesListProps {
  initialData: AthleteWithSport[];
  filters: { searchText: string };
}

export function AthletesList({ initialData, filters }: AthletesListProps) {
  const [offset, setOffset] = useState(ATHLETES_PER_PAGE);
  const [athletes, setAthletes] = useState<AthleteWithSport[]>(initialData);
  const [hasMoreAthletes, setHasMoreAthletes] = useState(
    initialData.length === ATHLETES_PER_PAGE
  );
  const [scrollTrigger, isInView] = useInView();

  const loadMoreAthletes = async () => {
    if (hasMoreAthletes) {
      const athletesApi = await findAthletes({ offset, ...filters });

      if (athletesApi.length < ATHLETES_PER_PAGE) setHasMoreAthletes(false);

      setAthletes((prevAthletes) => [...prevAthletes, ...athletesApi]);
      setOffset((prevOffset) => prevOffset + ATHLETES_PER_PAGE);
    }
  };

  useEffect(() => {
    if (isInView && hasMoreAthletes) loadMoreAthletes();
  }, [hasMoreAthletes, isInView]);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {athletes.map((athlete) => (
          <AthleteCard key={athlete.id} athlete={athlete} />
        ))}
      </div>

      {hasMoreAthletes && (
        <div className='w-full flex justify-center py-4'>
          <div ref={scrollTrigger}>Carregando...</div>
        </div>
      )}
    </>
  );
}
