import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy { 
  indexSubscription: Subscription;
  editMode:boolean = false;
  editingItemIdx:number;
  editingItem: Ingredient;

  @ViewChild('f') ingredientForm: NgForm;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.indexSubscription = this.shoppingListService.startedEditing
      .subscribe((index:number) => {
        this.editingItemIdx = index;
        this.editMode = true;
        this.editingItem = this.shoppingListService.getIngredientByIndex(index);
        this.ingredientForm.setValue({
          name:this.editingItem.name,
          amount:this.editingItem.amount
        })
      })
  }

  onAddItem(){
    const newIngredient = new Ingredient(this.ingredientForm.value.name, +this.ingredientForm.value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editingItemIdx, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    if(this.editMode){
      this.shoppingListService.removeIngredient(this.editingItemIdx);
      this.ingredientForm.reset();
      this.editMode = false;
    }
  }

  onClearForm(){
    this.ingredientForm.reset();
    this.editMode = false;
  }

  ngOnDestroy () {
    this.indexSubscription.unsubscribe();
  }
}
