import { CategoriesFilter } from '@/app/_components/Filters/_components';

interface DesktopFiltersProps {
  category: string;
}

export function DesktopFilters({ category }: DesktopFiltersProps) {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter category={category} />
      </div>
    </div>
  );
}
