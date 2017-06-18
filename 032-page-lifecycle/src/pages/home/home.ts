import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToHumans() {
    this.navCtrl.push(UsersPage)
      .catch((error) => console.log('Access Denied ' + error));
  }

}