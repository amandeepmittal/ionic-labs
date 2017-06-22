import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Ingredient } from "../../models/ingredients";

@Injectable()
export class ShoppingListProvider {
  private ingredinets: Ingredient[] = [];
  constructor() {}

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

}
