import { Categories, Dir, Sort } from '@/lib/types/athletes';
import { Sport } from '@prisma/client';

export interface FiltersProps {
  sports: Sport[];
  filtersParams: FiltersParams;
  onCategoryChange: (selectedCategory: string) => void;
  onSportChange: (sport: string) => void;
  onSortByChange: (selectedSort: string) => void;
  onDirectionChange: () => void;
}

export interface FiltersParams {
  searchText?: string;
  category?: Categories;
  sport?: string;
  sort?: Sort;
  dir?: Dir;
}

export interface SortByParams {
  sort?: string;
  onSortByChange: (selectedSort: string) => void;
  dir?: string;
  onDirectionChange: (params: any) => void;
}

export interface CategoriesParams {
  category?: string;
  onCategoryChange: (selectedCategory: string) => void;
}

export interface SportsParams {
  sports: Sport[];
  sport?: string;
  onSportChange: (sport: string) => void;
}
