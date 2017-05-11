import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TaskService } from "./task.service";
import { TaskDetailPage } from "../pages/task-detail/task-detail";
import { TaskCreatePage } from "../pages/task-create/task-create";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TaskDetailPage,
    TaskCreatePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TaskDetailPage,
    TaskCreatePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TaskService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
