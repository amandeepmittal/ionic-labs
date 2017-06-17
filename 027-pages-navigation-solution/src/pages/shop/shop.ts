import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BuyoutPage } from '../buyout/buyout';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  buyout() {
    this.navCtrl.push(BuyoutPage);
  }


  buy(product: string) {
    this.navCtrl.push(BuyoutPage, {
      product: product
    });
  }

}
