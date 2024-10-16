import { GoSortAsc, GoSortDesc } from 'react-icons/go';

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

interface SortByParams {
  sort: string;
  handleSortByChange: (selectedSort: string) => void;
  handleDirectionChange: (params: any) => void;
  dir: string;
}

export function SortBy({
  sort,
  handleSortByChange,
  handleDirectionChange,
  dir,
}: SortByParams) {
  return (
    <div className='flex flex-col md:flex-row items-center gap-1'>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Ordenação:
      </span>

      <div className='flex items-center gap-1'>
        <Select
          defaultValue='followers'
          value={sort}
          onValueChange={handleSortByChange}
        >
          <SelectTrigger className='w-32'>
            <SelectValue placeholder='Seguidores' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='followers'>Seguidores</SelectItem>
            <SelectItem value='name'>Nome</SelectItem>
          </SelectContent>
        </Select>

        <Button type='button' onClick={handleDirectionChange}>
          {dir === 'desc' ? (
            <GoSortDesc className='size-6' />
          ) : (
            <GoSortAsc className='size-6' />
          )}
        </Button>
      </div>
    </div>
  );
}
