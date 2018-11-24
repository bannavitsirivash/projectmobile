import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-game-createroom',
  templateUrl: 'game-createroom.html',
})
export class GameCreateroomPage {
  point: any;
  num: any;
  name: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('name').then((val) => {
      this.name = val;
      this.storage.get('num').then((val2) => {
        this.num = val2;
        this.storage.get('point').then((val3) => {
          this.point = val3;
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameCreateroomPage');
  }

}
