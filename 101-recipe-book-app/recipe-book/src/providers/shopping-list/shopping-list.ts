import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Http, Response } from '@angular/http';

import { AuthProvider } from '../auth/auth';
import { Ingredient } from "../../models/ingredients";
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListProvider {
  private ingredinets: Ingredient[] = [];
  constructor(public http: Http, public authService: AuthProvider) {}

  addItem(name: string, amount: number) {
    this.ingredinets.push(new Ingredient(name, amount));
    console.log(this.ingredinets);
  }

  addItems(items: Ingredient[]) {
    this.ingredinets.push(...items);
  }

  getItems() {
    return this.ingredinets.slice();
  }

  removeItem(index: number) {
    this.ingredinets.splice(index, 1);
  }

  storeList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.put('https://ionic3-recipe-book-79d1f.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token, this.ingredinets)
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
    .do((data) => {
      this.ingredinets = data;
    });
  }

}
