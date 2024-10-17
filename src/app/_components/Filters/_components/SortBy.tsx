import { GoSortAsc, GoSortDesc } from 'react-icons/go';

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { SortByParams } from './types/filters';

export function SortBy({
  sort,
  onSortByChange,
  onDirectionChange,
  dir,
}: SortByParams) {
  return (
    <div className='flex flex-col md:flex-row items-center gap-1'>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Ordenação:
      </span>

      <div className='flex items-center gap-1'>
        <Select value={sort || 'followers'} onValueChange={onSortByChange}>
          <SelectTrigger className='w-32'>
            <SelectValue placeholder='Seguidores' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='followers'>Seguidores</SelectItem>
            <SelectItem value='name'>Nome</SelectItem>
          </SelectContent>
        </Select>

        <Button type='button' onClick={onDirectionChange}>
          {dir === 'asc' ? (
            <GoSortAsc className='size-6' />
          ) : (
            <GoSortDesc className='size-6' />
          )}
        </Button>
      </div>
    </div>
  );
}
