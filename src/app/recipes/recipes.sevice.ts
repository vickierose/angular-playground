import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipesService {
  selectedRecipe = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Tea', 'Great tasted tea', 'http://www.publicdomainpictures.net/pictures/190000/velka/tea-and-autumn-decorations-1471887599VP6.jpg'),
    new Recipe('Coffee', 'Great tasted arabica', 'http://www.publicdomainpictures.net/pictures/190000/velka/tea-and-autumn-decorations-1471887599VP6.jpg')
  ];

  getRecipes () {
    return this.recipes.slice();
  }
}