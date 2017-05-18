import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  password: string = '';

  constructor(private afDB: AngularFireDatabase, private storage: Storage) {}

  validate(password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.afDB.list(`/users/${password}`).subscribe((resp) => {
        if (resp.length > 0) {
          this.storePassword(password).then(() => {
            resolve(true);
          });
        } else {
          resolve(false);
        }
      });
    });
  }

  protected storePassword(password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.storage.ready().then(() => {
        this.storage.set('password', password).then(() => {
          resolve(password);
        });
      });
    })
  }

}
