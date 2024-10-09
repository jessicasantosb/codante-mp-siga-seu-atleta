import { SearchInput } from '@/components/ui';

export function Filters() {
  return (
    <div className='relative flex flex-row md:flex-col lg:flex-row gap-8'>
      <div>
        <SearchInput
          className='w-56 md:w-full lg-w-56'
          type='text'
          name='q'
          placeholder='pesquisar'
        />
      </div>
    </div>
  );
}
