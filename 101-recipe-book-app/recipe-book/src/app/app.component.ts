import * as firebase from 'firebase';

import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';

import { AuthProvider } from '../providers/auth/auth';
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from '../pages/signup/signup';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, public authService: AuthProvider) {
    // firebase setup
    firebase.initializeApp({
      apiKey: "AIzaSyAPAj3pgUhNBMu7a8SYufk1SQaou03Aj4U",
    authDomain: "ionic3-recipe-book-79d1f.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isAuthenticated = true;
        this.nav.setRoot(this.tabsPage);
        // this.rootPage = TabsPage;
      } else {
        this.isAuthenticated = false;
        this.nav.setRoot(this.signinPage);
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}

