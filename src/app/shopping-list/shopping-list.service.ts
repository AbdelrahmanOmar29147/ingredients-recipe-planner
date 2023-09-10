import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export default class ShoppingListService {
  subscription = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.subscription.next(this.ingredients.slice());
  }
}
