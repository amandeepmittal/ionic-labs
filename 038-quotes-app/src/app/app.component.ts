import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';

import { SettingsPage } from '../pages/settings/settings';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
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
}

