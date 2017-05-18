import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { LocationProvider } from "../../providers/location/location";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  seller: FirebaseObjectObservable<any>;
  sellerLocation: any = {
    lat: '',
    long: '',
  };

  constructor(
    private navCtrl: NavController,
    private auth: AuthProvider,
    private location: LocationProvider,
    private afDB: AngularFireDatabase,
  ) {
    this.auth.hasPassword().then((resp) => {
      if (! resp.hasPassword) {
        return;
      }

      this.location.initLocation(resp.password);
      this.seller = this.afDB.object('/users/' + resp.password);
      this.seller.subscribe((resp) => {
        this.sellerLocation = resp;
      })
    });
  }

}
