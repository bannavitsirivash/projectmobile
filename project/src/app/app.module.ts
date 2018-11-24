import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { GameSelectmodePage } from '../pages/game-selectmode/game-selectmode';
import { GameCreateroomPage } from '../pages/game-createroom/game-createroom';
import { NamePage } from '../pages/name/name';
import { StartPage }from '../pages/start/start';
import { ResultPage } from '../pages/result/result';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameSelectmodePage,
    GameCreateroomPage,
    NamePage,
    StartPage,
    ResultPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GameSelectmodePage,
    GameCreateroomPage,
    NamePage,
    StartPage,
    ResultPage
   

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
