import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-game-selectmode',
  templateUrl: 'game-selectmode.html',
})
export class GameSelectmodePage {
  apiRoot: any = 'http://192.168.1.202:3000/api/select';
  headers: any;
  options: any;
  public id: any;
  status: any = 0;
  proposition_game: any;
  choice_1: any;
  choice_2: any;
  choice_3: any;
  choice_4: any;
  answer: any;
  num: any = 0;
  correct: any = 0;
  point: any = 0;
  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams, private storage: Storage) {
    if (this.status == 0) {
      this.database();
    } else {
      this.next();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameSelectmodePage');
  }

  database() {
    this.storage.get('id').then((val) => {
      this.id = val;
      const url = `${this.apiRoot}`;

      this.headers = new Headers(
        { 'Content-Type': 'application/json' }
      );

      this.options = new RequestOptions({
        headers: this.headers,
        body: { 'id': this.id }
      });
      this.http.post(url, '', this.options).subscribe(res => {
        this.status = 1;
        const data = JSON.parse(res['_body']);
        this.proposition_game = data.usersData.proposition_game;
        this.choice_1 = data.usersData.choice_1;
        // alert(this.choice_1)
        this.choice_2 = data.usersData.choice_2;
        this.choice_3 = data.usersData.choice_3;
        this.choice_4 = data.usersData.choice_4;
        this.answer = data.usersData.answer;
      });
    });
  }

  check(number) {
    if (this.answer == number) {
      this.num++;
      this.correct++;
      this.point = this.point + 10;
      if (this.num == 10) {
        this.storage.set('correct', this.correct).then(() => {
          this.storage.set('point', this.point).then(() => {
            this.navCtrl.setRoot(ResultPage);
          });
        });
        // return 0;
      } else {
        if (this.num == 10) {
          this.storage.set('correct', this.correct).then(() => {
            this.storage.set('point', this.point).then(() => {
              this.navCtrl.setRoot(ResultPage);
            });
          });
        } else {
          this.id = this.random();
          this.next();
        }
      }
    } else {
      this.num++;
      if (this.num == 10) {
        this.storage.set('correct', this.correct).then(() => {
          this.storage.set('point', this.point).then(() => {
            this.navCtrl.setRoot(ResultPage);
          });
        });
      } else {
        this.id = this.random();
        this.next();
      }
    }
  }

  next() {
    const url = `${this.apiRoot}`;

    this.headers = new Headers(
      { 'Content-Type': 'application/json' }
    );

    this.options = new RequestOptions({
      headers: this.headers,
      body: { 'id': this.id }
    });
    this.http.post(url, '', this.options).subscribe(res => {
      this.status = 1;
      const data = JSON.parse(res['_body']);
      this.proposition_game = data.usersData.proposition_game;
      this.choice_1 = data.usersData.choice_1;
      // alert(this.choice_1)
      this.choice_2 = data.usersData.choice_2;
      this.choice_3 = data.usersData.choice_3;
      this.choice_4 = data.usersData.choice_4;
      this.answer = data.usersData.answer;
    });
  }

  random(): number {
    let rand = Math.floor(Math.random() * 19) + 1;
    return rand;
  }

}
