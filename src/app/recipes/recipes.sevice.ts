import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>()
  private recipes: Recipe[] = [
    new Recipe('Tea', 'Great tasted tea', 'http://www.publicdomainpictures.net/pictures/190000/velka/tea-and-autumn-decorations-1471887599VP6.jpg', [new Ingredient('tea leafs',  1), new Ingredient('water', 2)]),
    new Recipe('Coffee', 'Great tasted arabica', 'http://www.publicdomainpictures.net/pictures/190000/velka/tea-and-autumn-decorations-1471887599VP6.jpg', [new Ingredient('grinded coffee', 1), new Ingredient('water', 2)])
  ];

  constructor (private slService: ShoppingListService) {}
  getRecipes () {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes.splice(index, 1, recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}