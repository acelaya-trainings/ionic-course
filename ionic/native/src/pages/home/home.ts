import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageData: string;
  location: any;

  constructor(
    private navCtrl: NavController, 
    protected camera: Camera,
    protected geolocation: Geolocation,
  ) {

  }

  takePicture() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      this.imageData = 'data:image/jpeg;base64,' + imageData;
    });
  }

  showAlbum() {

  }

  showLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location = resp.coords;
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
