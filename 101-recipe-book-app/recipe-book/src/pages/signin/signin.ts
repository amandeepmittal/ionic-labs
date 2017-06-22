import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSignin(form: NgForm) {
    console.log(form.value);
  }

}
