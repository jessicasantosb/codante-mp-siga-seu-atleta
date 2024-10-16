import { Sport } from '@prisma/client';

export interface FiltersProps {
  sports: Sport[];
  sport: string;
  category?: string;
  sort: string;
  dir: string;
  onCategoryChange: (selectedCategory: string) => void;
  onSportChange: (sport: string) => void;
  onSortByChange: (selectedSort: string) => void;
  onDirectionChange: () => void;
}
