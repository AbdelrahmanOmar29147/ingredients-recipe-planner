import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import ShoppingListService from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Buffalo Wings1',
      'Deep-fried unbreaded chicken wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter.',
      'https://www.thespruceeats.com/thmb/gXxOmyrw76vsaqjClOUm55cbZ0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-buffalo-hot-wings-recipe-100937-hero-01-611327a035df408fa3771fe8970d8521.jpg',
      [new Ingredient('Chicken Wings', 10), new Ingredient('Hot Sauce', 1)]
    ),
    new Recipe(
      'Buffalo Wings2',
      'Deep-fried unbreaded chicken wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter.',
      'https://www.thespruceeats.com/thmb/gXxOmyrw76vsaqjClOUm55cbZ0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-buffalo-hot-wings-recipe-100937-hero-01-611327a035df408fa3771fe8970d8521.jpg',
      [new Ingredient('Chicken Wings2', 10), new Ingredient('Hot Sauce2', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // return a copy of recipes
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
