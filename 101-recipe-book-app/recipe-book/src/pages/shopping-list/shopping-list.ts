import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ShoppingListProvider } from "../../providers/shopping-list/shopping-list";
import { Ingredient } from "../../models/ingredients";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  shoppingListItems: Ingredient[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public shoppingListService: ShoppingListProvider){
  }

  onAddItem(form: NgForm) {
    this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  ionViewWillEnter() {
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.shoppingListService.removeItem(index);
    this.loadItems();
  }

  private loadItems() {
    this.shoppingListItems = this.shoppingListService.getItems();
  }
}
