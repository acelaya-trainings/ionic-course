import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  password: string = '';
  @ViewChild('mainSlide')
  slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doLogin() {
    this.slides.slideNext();
  }

  access() {

  }

}
