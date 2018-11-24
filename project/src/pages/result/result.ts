import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { StartPage } from '../start/start';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  point: any;
  correct: any;
  name: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('name').then((val) => {
      this.name = val;
      this.storage.get('correct').then((val2) => {
        this.correct = val2;
        this.storage.get('point').then((val3) => {
          this.point = val3;
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }
  test() {
      this.storage.remove('correct').then((val) => {
        this.storage.remove('point').then((val2) => {
          this.navCtrl.setRoot(HomePage);
        });
    });
  }
  test1() {
    this.navCtrl.setRoot(StartPage);
  }
}
