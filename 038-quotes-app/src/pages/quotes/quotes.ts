import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Quote } from './../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage  implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // OnInit always load before the template is rendered
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // if a page is in stack, data is cached so no need to load data whenever the button is clicked in library page
  // use ionViewDidLoad to get data instead of constructor function because constructor function initiailized whenver the component gets load, no caching
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // to use this, add elvis operator (?) in template to use this approach
  // because ion page lifecycle events are load after angular 2 loads the template
  // }

}
