import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  selectedRecipe = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Tea', 'Great tasted tea', 'http://www.publicdomainpictures.net/pictures/190000/velka/tea-and-autumn-decorations-1471887599VP6.jpg', [new Ingredient('tea leafs',  1), new Ingredient('water', 2)]),
    new Recipe('Coffee', 'Great tasted arabica', 'http://www.publicdomainpictures.net/pictures/190000/velka/tea-and-autumn-decorations-1471887599VP6.jpg', [new Ingredient('grinded coffee', 1), new Ingredient('water', 2)])
  ];

  constructor (private slService: ShoppingListService) {}
  getRecipes () {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}