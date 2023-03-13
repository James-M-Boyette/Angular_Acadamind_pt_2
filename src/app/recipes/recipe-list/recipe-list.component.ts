import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Delicious food', 'https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg'),
    new Recipe('ANOTHER Recipe', 'MORE Delicious food', 'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum-Low-Carb-Keto-Pancakes-Recipe-21.jpg')
  ];

  onClickToUpdatePhoto(){
    this.recipes[0].imagePath = "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg"
  }
}
