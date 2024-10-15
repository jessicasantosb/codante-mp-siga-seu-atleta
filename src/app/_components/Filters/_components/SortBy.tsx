import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

export function SortBy() {
  return (
    <div className='flex flex-col md:flex-row items-center gap-1'>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Ordenação
      </span>

      <div className='flex items-center gap-1'>
        <Select defaultValue='followers' value='' onValueChange={() => {}}>
          <SelectTrigger className='w-32'>
            <SelectValue placeholder='Seguidores' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='followers'>Seguidores</SelectItem>
            <SelectItem value='name'>Nome</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
