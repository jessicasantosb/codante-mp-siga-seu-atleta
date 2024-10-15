import { Sport } from '@prisma/client';

import {
  CategoriesFilter,
  SportsFilter,
} from '@/app/_components/Filters/_components';

interface DesktopFiltersProps {
  sports: Sport[];
  sport: string;
  category?: string;
  onCategoryChange: (selectedCategory: string) => void;
  onSportChange: (sport: string) => void;
}

export function DesktopFilters({
  sports,
  sport,
  category,
  onCategoryChange,
  onSportChange,
}: DesktopFiltersProps) {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />
        <SportsFilter
          sport={sport}
          sports={sports}
          onSportChange={onSportChange}
        />
      </div>
    </div>
  );
}
