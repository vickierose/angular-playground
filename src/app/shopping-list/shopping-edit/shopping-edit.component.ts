import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit { 

  @Output() itemAdded = new EventEmitter<{name: string, amount: number}>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(nameInput, amountInput){
    const ingredientName=nameInput.value;
    const ingredientAmount = amountInput.value;
    this.itemAdded.emit({name:ingredientName, amount:ingredientAmount});
  }
}
