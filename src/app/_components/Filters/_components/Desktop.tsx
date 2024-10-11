import { CategoriesFilter } from '@/app/_components/Filters/_components/Categories';
import { Sport } from '@prisma/client';
import { SportsFilter } from './Sports';

interface DesktopFiltersProps {
  sports: Sport[];
  sport: string;
  category: string;
  onCategoryChange: (selectedCategory: string) => void;
}

export function DesktopFilters({
  sports,
  sport,
  category,
  onCategoryChange,
}: DesktopFiltersProps) {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />
      </div>

      <SportsFilter sport={sport} sports={sports} />
    </div>
  );
}
