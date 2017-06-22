import { AlertController, IonicPage, LoadingController, NavController, NavParams, PopoverController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public shoppingListService: ShoppingListProvider, public popoverCtrl: PopoverController, public authService: AuthProvider,
  public loadingCtrl: LoadingController, public alertCtrl: AlertController){
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
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    const popover = this.popoverCtrl.create(SloptionsPage);
    popover.present({
      ev: event
    });
    popover.onDidDismiss(data => {
      if(!data) {
        return;
      }
      if(data.action == 'load') {
        loading.present();
         this.authService.getActiveUser().getToken()
        .then((token: string) => {
          this.shoppingListService.fetchList(token)
          .subscribe(
            (list: Ingredient[]) => {
              loading.dismiss();
            if(list) {
              this.shoppingListItems = list;
            } else {
              this.shoppingListItems = [];
            }
          }, error => {
            loading.dismiss();
            this.handleError(error.json().error);
          })
        });
      } else if(data.action == 'store'){
        loading.present();
        this.authService.getActiveUser().getToken()
        .then((token: string) => {
          this.shoppingListService.storeList(token)
          .subscribe(
            () => {
            loading.dismiss();
          }, error => {
            loading.dismiss();
            this.handleError(error.json().error);
          })
        });
      }
    })
  }

  private loadItems() {
    this.shoppingListItems = this.shoppingListService.getItems();
  }

  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      title: 'Error',
      message: errorMessage,
      buttons: ['Ok']
    });
    alert.present();
  }
}
