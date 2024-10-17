import { Sport } from '@prisma/client';

import { Categories, Dir, Sort } from '@/lib/types/athletes';

export interface FiltersProps {
  sports: Sport[];
  filtersParams: FiltersParams;
  onCategoryChange: (selectedCategory: Categories) => void;
  onSportChange: (selectedSport: string) => void;
  onSortByChange: (selectedSort: Sort) => void;
  onDirectionChange: (selectedDirection: Dir) => void;
}

export interface FiltersParams {
  searchText?: string;
  category?: Categories;
  sportCode?: string;
  sort?: Sort;
  dir?: Dir;
}

export interface SortByParams {
  sort?: Sort;
  onSortByChange: (selectedSort: Sort) => void;
  dir?: Dir;
  onDirectionChange: (selectedDirection: Dir) => void;
}

export interface CategoriesParams {
  category?: Categories;
  onCategoryChange: (selectedCategory: Categories) => void;
}

export interface SportsParams {
  sports: Sport[];
  sportCode?: string;
  onSportChange: (selectedSport: string) => void;
}
