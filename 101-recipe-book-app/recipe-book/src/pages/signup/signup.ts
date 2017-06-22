import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

  }

  onSignup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password).then((data) => {
      loading.dismiss();
      // console.log(data);
    })
    .catch((error) => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Signup failed!',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
      // console.log(error);
    });
  }

}
