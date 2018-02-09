import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredients:Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 2)
  ];

  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients:Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}