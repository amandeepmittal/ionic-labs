import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-sloptions',
  templateUrl: 'sloptions.html',
})
export class SloptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private viewCtrl: ViewController) {
  }

  onAction(action: string) {
    this.viewCtrl.dismiss({
      action: action
    });
  }
}
