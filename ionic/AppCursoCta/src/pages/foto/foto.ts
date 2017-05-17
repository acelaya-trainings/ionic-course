import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {File} from '@ionic-native/file';
import { PictureProvider } from "../../providers/picture.provider";
import { Picture } from "../../types/picture";

@Component({
  selector: 'foto-page',
  templateUrl: 'foto.html'
})
export class FotoPage {
  image:any;
  constructor(public navCtrl: NavController,private camera: Camera,private file:File,private provider:PictureProvider) {

const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 this.image='data:image/jpeg;base64,' + imageData;
 
    let image:Picture= { id:1,
                          path: this.image,
                          coord: { latitude: "0", longitude: "0"}
                        }

    provider.createPicture(image).then((resultado)=>
      {
        console.log(resultado);
      },
    (error) =>
      {
      console.log("error:"+error);
      });

 
}, (err) => {
 // Handle error
});

  }

}
