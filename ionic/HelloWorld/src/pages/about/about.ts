import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    name: string;
    authors: string[];

  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.name = navParams.get('name');

    this.authors = [
        'Foo',
        'Bar',
        'Baz',
    ];
  }

  goHome() {
      this.navCtrl.popTo(HomePage);
  }

}
