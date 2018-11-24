import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameSelectmodePage } from './game-selectmode';

@NgModule({
  declarations: [
    GameSelectmodePage,
  ],
  imports: [
    IonicPageModule.forChild(GameSelectmodePage),
  ],
})
export class GameSelectmodePageModule {}
