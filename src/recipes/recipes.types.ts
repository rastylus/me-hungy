export interface Quantity {
  amount: number;
  unit: string; // e.g., 'g', 'kg', 'cup', 'tbsp', 'tsp', 'piece', etc.
}

export interface Ingredient {
  id?: string;
  name: string;
  quantity?: Quantity;
  notes?: string; // e.g., 'finely chopped', 'at room temperature'
}

export interface Recipe {
  id: number | string;
  name: string;
  description?: string;
  ingredients: Ingredient[];
  steps: string[];
  prepTime?: number; // in minutes
  cookTime?: number; // in minutes
  servings?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  tags?: string[]; // e.g., ['vegetarian', 'quick', 'Italian']
  imageUrl?: string;
}

export type RecipesList = Recipe[];
