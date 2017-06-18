import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

import { Quote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage  implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public quotesService: QuotesProvider) {

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

  onAddToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'You sure, you want to favorite his quote?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.addQuoteToFavorites(quote);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
  this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

}
