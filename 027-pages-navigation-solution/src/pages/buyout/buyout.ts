import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
  product: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get('product');
  }

  buy() {
    this.navCtrl.popToRoot();
  }

}
