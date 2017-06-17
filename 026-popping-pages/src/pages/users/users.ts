import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { UserPage } from '../user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {
      username: name
    })
  }

}
