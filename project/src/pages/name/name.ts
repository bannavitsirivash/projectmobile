import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
// import { GameSelectmodePage } from '../game-selectmode/game-selectmode';

@IonicPage()
@Component({
  selector: 'page-name',
  templateUrl: 'name.html',
})
export class NamePage {
  myRand: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NamePage');
  }
  test(name: string) {
    var getName = name;
    if (name == '') {
      alert('กรุณาใส่ข้อมูล');
      return 0;
    }

    if (getName == name) {
      // set a key/value
      this.storage.set('name', getName).then(() => {
        this.myRand = this.random();
        // alert(this.myRand)
        this.storage.set('id', this.myRand).then(() => {
          const confirm = this.alertCtrl.create({
            title: 'ชื่อของคุณ',
            message: getName,
            buttons: [
              {
                text: 'ตกลง',
                handler: () => {
                  this.navCtrl.setRoot(HomePage);
                }
              },
              {
                text: 'ยกเลิก',
                handler: () => {
                  // console.log('Disagree clicked');
                }
              }
            ]
          });
          confirm.present();
          // this.navCtrl.setRoot(HomePage);
        })
      });
    }
  }

  random(): number {
    let rand = Math.floor(Math.random() * 19) + 1;
    return rand;
  }
}
