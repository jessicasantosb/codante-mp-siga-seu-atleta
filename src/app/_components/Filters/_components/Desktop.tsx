import {
  CategoriesFilter,
  SortBy,
  SportsFilter,
} from '@/app/_components/Filters/_components';
import { FiltersProps } from './types/filters';

export default function DesktopFilters({
  sports,
  filtersParams,
  onCategoryChange,
  onSportChange,
  onSortByChange,
  onDirectionChange,
}: FiltersProps) {
  const { sport, category, sort, dir } = filtersParams;

  return (
    <div className='w-full hidden md:flex justify-between'>
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
        onSortByChange={onSortByChange}
        onDirectionChange={onDirectionChange}
      />
    </div>
  );
}
