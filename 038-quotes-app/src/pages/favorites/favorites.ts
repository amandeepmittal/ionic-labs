import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { QuotesProvider } from '../../providers/quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public quotesService: QuotesProvider, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
  }

}
