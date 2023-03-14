import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Cheese Burgers', 'Savory Beef, Melted Cheese, Lettuce, Tomato, and Pickles!', 'https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg'),
    new Recipe(`Grandma's Pancakes`, 'Fluffy and MADE for syrup', 'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum-Low-Carb-Keto-Pancakes-Recipe-21.jpg')
  ];

  onClickToUpdatePhoto(){
    this.recipes[0].imagePath = "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg"
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}


