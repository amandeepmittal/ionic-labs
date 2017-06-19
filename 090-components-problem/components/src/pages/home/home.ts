import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taps = 0;
  press = 0;
  constructor(public navCtrl: NavController) {

  }

  onDidReset(resetType: string) {
    switch(resetType) {
      case 'tap':
        this.taps = 0;
        break;
       case 'press':
        this.press = 0;
        break;
      default:
        this.taps = 0;
        this.press = 0;
    }
  }

  onTap() {
    console.log('tapped');
    this.taps++;
  }

  onPress() {
    console.log('pressed');
    this.press++;
  }

  didWin() {
    return this.taps == 2 && this.press == 4;
  }
}
