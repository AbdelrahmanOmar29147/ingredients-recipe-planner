import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import ShoppingListService from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Buffalo Wings1',
  //     'Deep-fried unbreaded chicken wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter.',
  //     'https://www.thespruceeats.com/thmb/gXxOmyrw76vsaqjClOUm55cbZ0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-buffalo-hot-wings-recipe-100937-hero-01-611327a035df408fa3771fe8970d8521.jpg',
  //     [new Ingredient('Chicken Wings', 10), new Ingredient('Hot Sauce', 1)]
  //   ),
  //   new Recipe(
  //     'Buffalo Wings2',
  //     'Deep-fried unbreaded chicken wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter.',
  //     'https://www.thespruceeats.com/thmb/gXxOmyrw76vsaqjClOUm55cbZ0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-buffalo-hot-wings-recipe-100937-hero-01-611327a035df408fa3771fe8970d8521.jpg',
  //     [new Ingredient('Chicken Wings2', 10), new Ingredient('Hot Sauce2', 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    // set recipes
    this.recipes = recipes;
    // emit recipesChanged
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // return a copy of recipes
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
