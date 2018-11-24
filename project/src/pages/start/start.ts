import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NamePage } from '../name/name';
import { GameSelectmodePage } from '../game-selectmode/game-selectmode';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }
  test() {
    this.storage.remove('name').then(() => {
      this.storage.remove('correct').then(() => {
        this.storage.remove('point').then(() => {
          this.navCtrl.setRoot(NamePage);
        });
      });
    });
  }
  test1() {
    this.navCtrl.setRoot(GameSelectmodePage);
  }
}
