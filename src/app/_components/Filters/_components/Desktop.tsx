import { CategoriesFilter } from '@/app/_components/Filters/_components';

interface DesktopFiltersProps {
  category: string;
  onCategoryChange: (selectedCategory: string) => void;
}

export function DesktopFilters({
  category,
  onCategoryChange,
}: DesktopFiltersProps) {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />
      </div>
    </div>
  );
}
