'use client';

import { Sport } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { DesktopFilters } from '@/app/_components/Filters/_components';
import { SearchInput } from '@/components/ui';

export function Filters({ sports }: { sports: Sport[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || undefined;
  const sport = searchParams.get('sport') || '';
  const sort = '';
  const dir = '';

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

  const handleSortByChange = () => {};

  const handleDirectionChange = () => {};

  return (
    <div className='relative flex flex-row md:flex-col lg:flex-row gap-8'>
      <div>
        <SearchInput
          className='w-56 md:w-full lg-w-56'
          type='text'
          name='q'
          placeholder='Pesquisar'
          defaultValue={q}
          onChange={handleSearch}
        />
      </div>

      <DesktopFilters
        sport={sport}
        sports={sports}
        category={category}
        sort={sort}
        dir={dir}
        onCategoryChange={handleCategoryChange}
        onSportChange={handleSportChange}
        handleSortByChange={handleSortByChange}
        handleDirectionChange={handleDirectionChange}
      />
    </div>
  );
}
