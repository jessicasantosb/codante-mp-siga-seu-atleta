import { useState } from 'react';
import { GoFilter } from 'react-icons/go';

import {
  CategoriesFilter,
  SortBy,
  SportsFilter,
} from '@/app/_components/Filters/_components';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui';
import { FiltersProps } from './types/filters';

export default function MobileFilters({
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
  const [isOpen, setIsOpen] = useState(false);

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
            sport={sport}
            sports={sports}
            onSportChange={closeAfter(onSportChange)}
          />
          <SortBy
            sort={sort}
            dir={dir}
            handleSortByChange={closeAfter(handleSortByChange)}
            handleDirectionChange={closeAfter(handleDirectionChange)}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
