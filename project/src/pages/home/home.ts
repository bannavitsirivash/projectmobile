import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameSelectmodePage } from '../game-selectmode/game-selectmode';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  test() {
    this.navCtrl.setRoot(GameSelectmodePage);
  }

}
