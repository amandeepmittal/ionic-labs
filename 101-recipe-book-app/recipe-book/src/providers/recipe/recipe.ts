import 'rxjs/add/operator/map';

import { Http, Response } from '@angular/http';

import { AuthProvider } from "../auth/auth";
import { Ingredient } from './../../models/ingredients';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Injectable()
export class RecipeProvider {
  private recipes: Recipe[] = [];
  constructor(public http: Http, public authService: AuthProvider) {}

  addRecipe(title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes.push(new Recipe(title, description, difficulty, ingredients));
  }

  getRecipes() {
    return this.recipes.slice();
  }

  updateRecipe(index: number, title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes[index] = new Recipe(title, description, difficulty, ingredients);
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  storeList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.put('https://ionic3-recipe-book-79d1f.firebaseio.com/' + userId + '/recipes.json?auth=' + token, this.recipes)
    .map((response: Response) => {
      return response.json();
    });
  }

  fetchList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.get('https://ionic3-recipe-book-79d1f.firebaseio.com/' + userId + '/recipes.json?auth=' + token)
    .map((response: Response) => {
      return response.json();
    })
    .do((recipes: Recipe[]) => {
      if(recipes) {
        this.recipes = recipes;
      } else {
        this.recipes = [];
      }
    });
  }
}
