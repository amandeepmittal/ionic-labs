import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Http, Response } from '@angular/http';

import { AuthProvider } from '../auth/auth';
import { Ingredient } from "../../models/ingredients";
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListProvider {
  private ingredients: Ingredient[] = [];
  constructor(public http: Http, public authService: AuthProvider) {}

  addItem(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    console.log(this.ingredients);
  }

  addItems(items: Ingredient[]) {
    this.ingredients.push(...items);
  }

  getItems() {
    return this.ingredients.slice();
  }

  removeItem(index: number) {
    this.ingredients.splice(index, 1);
  }

  storeList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.put('https://ionic3-recipe-book-79d1f.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token, this.ingredients)
    .map((response: Response) => {
      return response.json();
    });
  }

  fetchList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.get('https://ionic3-recipe-book-79d1f.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token)
    .map((response: Response) => {
      return response.json();
    })
    .do((ingredients: Ingredient[]) => {
      if(ingredients) {
        this.ingredients = ingredients;
      } else {
        this.ingredients = [];
      }

    });
  }

}
