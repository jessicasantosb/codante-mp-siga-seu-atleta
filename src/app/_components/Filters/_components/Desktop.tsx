import {
  CategoriesFilter,
  SortBy,
  SportsFilter,
} from './';
import { FiltersProps } from '@/app/_components/Filters/_components/types';

export function DesktopFilters({
  sports,
  filtersParams,
  onCategoryChange,
  onSportChange,
  onSortByChange,
  onDirectionChange,
}: FiltersProps) {
  const { sportCode, category, sort, dir } = filtersParams;

  return (
    <div className='w-full hidden md:flex justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />
        <SportsFilter
          sportCode={sportCode}
          sports={sports}
          onSportChange={onSportChange}
        />
      </div>

      <SortBy
        sort={sort}
        dir={dir}
        onSortByChange={onSortByChange}
        onDirectionChange={onDirectionChange}
      />
    </div>
  );
}
