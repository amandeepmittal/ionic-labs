import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Recipe } from "../../models/recipe";
import { RecipeProvider } from '../../providers/recipe/recipe';

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipeService: RecipeProvider) {
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, {
      mode: 'New'
    });
  }

    onLoadRecipe() {

  }

}
