import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
  startedEditing = new Subject<number>();
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

  getIngredientByIndex(index:number) {
    return this.ingredients[index];
  }

  updateIngredient(index:number, newIngredient: Ingredient) {
    this.ingredients.splice(index, 1, newIngredient)
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1)
  }
}