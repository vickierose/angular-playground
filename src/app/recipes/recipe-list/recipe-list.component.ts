import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tea', 'Great tasted tea', 'http://www.publicdomainpictures.net/pictures/190000/velka/tea-and-autumn-decorations-1471887599VP6.jpg'),
    new Recipe('Coffee', 'Great tasted arabica', 'http://www.publicdomainpictures.net/pictures/190000/velka/tea-and-autumn-decorations-1471887599VP6.jpg')
  ];

  @Output() selectedRecipeEl = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
 this.selectedRecipeEl.emit(recipe);
  }

}
