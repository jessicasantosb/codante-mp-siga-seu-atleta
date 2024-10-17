import { AthletesListClient } from '@/app/_components/AthletesList/AthletesListClient';
import { FiltersParams } from '@/app/_components/Filters/_components/types';
import { findAthletes } from '@/lib/athletes';

export async function AthletesList({ filters }: { filters: FiltersParams }) {
  const athletes = await findAthletes({ ...filters });

  if (!athletes.length)
    return (
      <h2 className='text-xl'>
        Não existem atletas para os filtros selecionados.
      </h2>
    );

  return <AthletesListClient initialData={athletes} filters={filters} />;
}
