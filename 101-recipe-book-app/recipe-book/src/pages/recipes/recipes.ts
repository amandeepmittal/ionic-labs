import { AlertController, IonicPage, LoadingController, NavController, NavParams, PopoverController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Recipe } from "../../models/recipe";
import { RecipeProvider } from '../../providers/recipe/recipe';
import { SloptionsPage } from "../sloptions/sloptions";

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipeService: RecipeProvider, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public authService: AuthProvider) {
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, {
      mode: 'New'
    });
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
      if(data.action == 'load') {
        loading.present();
         this.authService.getActiveUser().getToken()
        .then((token: string) => {
          this.recipeService.fetchList(token)
          .subscribe(
            (list: Recipe[]) => {
              loading.dismiss();
            if(list) {
              this.recipes = list;
            } else {
              this.recipes = [];
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
          this.recipeService.storeList(token)
          .subscribe(
            () => {
            loading.dismiss();
          }, error => {
            loading.dismiss();
            this.handleError(error.json().error);
          })
        });
      }
    });
  }

  private loadItems() {
    this.recipes = this.recipeService.getRecipes();
  }

  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      title: 'Error',
      message: errorMessage,
      buttons: ['Ok']
    });
    alert.present();
  }

    onLoadRecipe() {

  }

}
