import { Component, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef

  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>()
  
  onAddItem(){
    const ingredientName = this.nameInputRef.nativeElement.value
    const ingredientAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)

    this.ingredientAdded.emit(newIngredient)
  }
}
