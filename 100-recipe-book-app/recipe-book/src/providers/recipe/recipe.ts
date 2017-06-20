import 'rxjs/add/operator/map';

import { Http } from '@angular/http';
import { Ingredient } from './../../models/ingredients';
import { Injectable } from '@angular/core';
import { Recipe } from './../../models/recipe';

@Injectable()
export class RecipeProvider {
  private recipes: Recipe[] = [];
  constructor(public http: Http) {}

  addRecipe(title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes.push(new Recipe(title, description, difficulty, ingredients));
  }

  getRecipe() {
    return this.recipes.slice();
  }

  updateRecipe(index: number, title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes[index] = new Recipe(title, description, difficulty, ingredients);
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1)
  }

}
