import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.sevice";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor (private recipesService: RecipesService) {}

  ngOnInit () {
    this.recipesService.selectedRecipe.subscribe(
      (recipe:Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }
}