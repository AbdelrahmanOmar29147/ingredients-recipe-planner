import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Buffalo Wings',
      'Deep-fried unbreaded chicken wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter.',
      'https://www.thespruceeats.com/thmb/gXxOmyrw76vsaqjClOUm55cbZ0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-buffalo-hot-wings-recipe-100937-hero-01-611327a035df408fa3771fe8970d8521.jpg'
    ),
  ];
}
