import { findAthletes } from '@/lib/athletes';
import { AthletesListClient } from './AthletesListClient';
import { Categories } from '@/lib/types/athletes';

export async function AthletesList({
  filters,
}: {
  filters: {
    searchText: string;
    category?: Categories;
    sport?: string;
  };
}) {
  const athletes = await findAthletes({ ...filters });

  if (!athletes.length)
    return (
      <h2 className='text-xl'>
        Não existem atletas para os filtros selecionados.
      </h2>
    );

  return <AthletesListClient initialData={athletes} filters={filters} />;
}
