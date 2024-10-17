import { useState } from 'react';
import { GoFilter } from 'react-icons/go';

import {
  CategoriesFilter,
  SortBy,
  SportsFilter,
} from '@/app/_components/Filters/_components';
import { FiltersProps } from '@/app/_components/Filters/_components/types';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui';

export function MobileFilters({
  sports,
  filtersParams,
  onCategoryChange,
  onSportChange,
  onSortByChange,
  onDirectionChange,
}: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { sportCode, category, sort, dir } = filtersParams;

  function closeAfter<T, R>(callback: (params: T) => R) {
    return (params: T) => {
      callback(params);
      setIsOpen(false);
    };
  }

  return (
    <div className='w-full flex justify-end md:hidden'>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)}
            className='w-16 group bg-yellow-300 border-2 border-black cursor-pointer'
          >
            <GoFilter className='size-6 text-black group-hover:text-white' />
          </Button>
        </DrawerTrigger>

        <DrawerContent
          className='p-4 flex flex-col gap-4'
          aria-describedby={undefined}
        >
          <DrawerTitle className='hidden'>Filtros</DrawerTitle>

          <CategoriesFilter
            category={category}
            onCategoryChange={closeAfter(onCategoryChange)}
          />
          <SportsFilter
            sportCode={sportCode}
            sports={sports}
            onSportChange={closeAfter(onSportChange)}
          />
          <SortBy
            sort={sort}
            dir={dir}
            onSortByChange={closeAfter(onSortByChange)}
            onDirectionChange={closeAfter(onDirectionChange)}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
