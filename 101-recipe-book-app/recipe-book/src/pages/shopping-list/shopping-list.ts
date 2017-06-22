import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { Component } from '@angular/core';
import { Ingredient } from "../../models/ingredients";
import { NgForm } from "@angular/forms";
import { ShoppingListProvider } from "../../providers/shopping-list/shopping-list";
import { SloptionsPage } from "../sloptions/sloptions";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  shoppingListItems: Ingredient[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public shoppingListService: ShoppingListProvider, public popoverCtrl: PopoverController){
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

  onShowOptions(event: MouseEvent) {
    const popover = this.popoverCtrl.create(SloptionsPage);
    popover.present({
      ev: event
    });
  }

  private loadItems() {
    this.shoppingListItems = this.shoppingListService.getItems();
  }
}
