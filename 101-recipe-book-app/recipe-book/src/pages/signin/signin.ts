import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing in...'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Signin Failed',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
  }

}
