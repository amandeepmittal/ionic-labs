import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('username');
  }

  goPrevious() {
    this.navCtrl.pop();
  }

  goHome() {
    this.navCtrl.popToRoot();
  }
}
