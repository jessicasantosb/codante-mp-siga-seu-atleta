import { Sport } from '@prisma/client';

import {
  CategoriesFilter,
  SortBy,
  SportsFilter,
} from '@/app/_components/Filters/_components';

interface DesktopFiltersProps {
  sports: Sport[];
  sport: string;
  category?: string;
  sort: string;
  dir: string;
  onCategoryChange: (selectedCategory: string) => void;
  onSportChange: (sport: string) => void;
  handleSortByChange: () => void;
  handleDirectionChange: () => void;
}

export function DesktopFilters({
  sports,
  sport,
  category,
  sort,
  dir,
  onCategoryChange,
  onSportChange,
  handleSortByChange,
  handleDirectionChange,
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

      <SortBy
        sort={sort}
        dir={dir}
        handleSortByChange={handleSortByChange}
        handleDirectionChange={handleDirectionChange}
      />
    </div>
  );
}
