import { useState } from 'react';

import { SportIcon } from '@/app/_components/Filters/_components';
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { SportsParams } from './types/filters';

export function SportsFilter({ sports, sportCode, onSportChange }: SportsParams) {
  const [isOpen, setIsOpen] = useState(false);  

  const handleSportChange = (name: string) => {
    if (name === 'all') {
      setIsOpen(false);
      onSportChange('');
      return;
    }

    const selected = sports.find((sport) => sport.name === name);
    setIsOpen(false);
    onSportChange(selected?.code || '');
  };

  return (
    <div className='flex flex-col md:flex-row items-center gap-1'>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Esportes:
      </span>
      <div className='h-full flex items-center space-x-4'>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              size={'sm'}
              className='h-full min-h-10 justify-start'
            >
              {sportCode ? (
                <>
                  <SportIcon code={sportCode} />
                  {sports.find((sport) => sport.code === sportCode)?.name}
                </>
              ) : (
                <>Todos os esportes</>
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent className='p-0' side='top' align='center'>
            <Command>
              <CommandInput placeholder='Pesquisar esporte' />

              <CommandList>
                <CommandEmpty>Esporte não encontrado</CommandEmpty>
                <CommandGroup>
                  <CommandItem value='all' onSelect={handleSportChange}>
                    <span>Todos os esportes</span>
                  </CommandItem>

                  {sports.map(({ code, name }) => {
                    return (
                      <CommandItem
                        key={code}
                        value={name}
                        onSelect={handleSportChange}
                      >
                        <SportIcon code={code} />
                        <span>{name}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
