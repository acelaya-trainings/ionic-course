import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    name: string;

  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.name = navParams.get('name');
  }

  goHome() {
      this.navCtrl.popTo(HomePage);
  }

}
