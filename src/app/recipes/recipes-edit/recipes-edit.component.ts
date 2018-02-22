import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipesService } from '../recipes.sevice';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm:FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm() {
    let recipeName = '';
    let recipeImg = '';
    let recipeDesc = '';
    let recipeIngredients= new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imagePath;
      recipeDesc = recipe.description;

      for (let ingredient of recipe.ingredients) {
        recipeIngredients.push(new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            }));
      }
      
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImg),
      'description': new FormControl(recipeDesc),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(''),
      'amount': new FormControl('')
    }))
  }
}
