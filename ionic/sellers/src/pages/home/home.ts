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
  private watcher = null;
  private userId: string;

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

      this.userId = resp.password;
      this.location.initLocation(this.userId);
      this.seller = this.afDB.object('/users/' + this.userId);
      this.watcher = this.seller.subscribe((resp) => {
        this.sellerLocation = resp;
      })
    });
  }

  logout() {
    if (this.watcher !== null) {
      this.watcher.unsubscribe();
      this.watcher = null;
      this.location.stopLocation(this.userId);
      this.auth.forgetPassword();
    }

    this.navCtrl.setRoot('LoginPage');
  }

}
