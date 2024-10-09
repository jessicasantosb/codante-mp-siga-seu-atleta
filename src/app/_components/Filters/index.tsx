'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { DesktopFilters } from '@/app/_components/Filters/_components';
import { SearchInput } from '@/components/ui';

export function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';

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
    params.set('category', selectedCategory);

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
          defaultValue={q}
          onChange={handleSearch}
        />
      </div>

      <DesktopFilters
        category={category}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
