import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { EditRecipePage } from "../pages/edit-recipe/edit-recipe";
import { MyApp } from './app.component';
import { RecipePage } from "../pages/recipe/recipe";
import { RecipeProvider } from '../providers/recipe/recipe';
import { RecipesPage } from "../pages/recipes/recipes";
import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { ShoppingListProvider } from '../providers/shopping-list/shopping-list';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from "../pages/tabs/tabs";
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    RecipePage,
    RecipesPage,
    EditRecipePage,
    TabsPage,
    ShoppingListPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecipePage,
    RecipesPage,
    EditRecipePage,
    TabsPage,
    ShoppingListPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListProvider,
    RecipeProvider,
    AuthProvider
  ]
})
export class AppModule {}
