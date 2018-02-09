import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit { 

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(nameInput, amountInput){
    const ingredientName=nameInput.value;
    const ingredientAmount = amountInput.value;
    this.shoppingListService.addIngredient({name: ingredientName, amount: ingredientAmount});
  }
}
