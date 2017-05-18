import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Subscription } from "rxjs/Subscription";

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationProvider {

  private watchers: Object = {};

  constructor(private geo: Geolocation, private afDB: AngularFireDatabase) {}

  initLocation(userId: string) {
    this.watchers[userId] = this.geo.watchPosition().subscribe((resp) => {
      let coords = resp.coords;

      this.afDB.object('/users/' + userId).update({
        lat: coords.latitude,
        long: coords.longitude,
      });
    });
  }

  stopLocation(userId) {
    this.watchers[userId].unsubscribe();
  }

}
