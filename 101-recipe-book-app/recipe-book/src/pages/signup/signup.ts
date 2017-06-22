import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider) {

  }

  onSignup(form: NgForm) {
    this.authService.signup(form.value.email, form.value.password).then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

}
