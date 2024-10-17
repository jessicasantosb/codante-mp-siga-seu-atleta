'use client';

import { Sport } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { SearchInput } from '@/components/ui';
import DesktopFilters from './_components/Desktop';
import MobileFilters from './_components/Mobile';
import { FiltersParams } from './_components/types/filters';

interface FiltersProps {
  sports: Sport[];
  filtersParams: FiltersParams;
}

export function Filters({ sports, filtersParams }: FiltersProps) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const { searchText, category, sport, sort, dir } = filtersParams;

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const searchedValue = event.target.value;

      if (searchedValue) {
        params.set('q', searchedValue);
      } else {
        params.delete('q');
      }

      replace(`${pathname}?${params.toString()}`);
    },
    200
  );

  const handleCategoryChange = (selectedCategory: string) => {
    if (selectedCategory.length === 0) return;

    const params = new URLSearchParams(searchParams);
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    } else {
      params.delete('category');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSportChange = (selectedSport: string) => {
    const params = new URLSearchParams(searchParams);

    if (selectedSport.length === 0) {
      params.delete('sport');
    } else {
      params.set('sport', selectedSport);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSortByChange = (selectedSort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', selectedSort);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleDirectionChange = () => {
    const params = new URLSearchParams(searchParams);
    params.set('dir', dir === 'desc' ? 'asc' : 'desc');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='relative flex flex-row md:flex-col lg:flex-row gap-8'>
      <div>
        <SearchInput
          className='w-56 md:w-full lg-w-56'
          type='text'
          name='q'
          placeholder='Pesquisar'
          defaultValue={searchText}
          onChange={handleSearch}
        />
      </div>

      <MobileFilters
        sport={sport}
        sports={sports}
        category={category}
        sort={sort}
        dir={dir}
        onCategoryChange={handleCategoryChange}
        onSportChange={handleSportChange}
        onSortByChange={handleSortByChange}
        onDirectionChange={handleDirectionChange}
      />

      <DesktopFilters
        sport={sport}
        sports={sports}
        category={category}
        sort={sort}
        dir={dir}
        onCategoryChange={handleCategoryChange}
        onSportChange={handleSportChange}
        onSortByChange={handleSortByChange}
        onDirectionChange={handleDirectionChange}
      />
    </div>
  );
}
