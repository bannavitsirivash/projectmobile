import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameCreateroomPage } from './game-createroom';

@NgModule({
  declarations: [
    GameCreateroomPage,
  ],
  imports: [
    IonicPageModule.forChild(GameCreateroomPage),
  ],
})
export class GameCreateroomPageModule {}
