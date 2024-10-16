import {
  CategoriesFilter,
  SortBy,
  SportsFilter,
} from '@/app/_components/Filters/_components';
import { FiltersProps } from './types/filters';

export default function DesktopFilters({
  sports,
  sport,
  category,
  sort,
  dir,
  onCategoryChange,
  onSportChange,
  handleSortByChange,
  handleDirectionChange,
}: FiltersProps) {
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
