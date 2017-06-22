import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider) {
  }

  onSignin(form: NgForm) {
    this.authService.signin(form.value.email, form.value.password)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
