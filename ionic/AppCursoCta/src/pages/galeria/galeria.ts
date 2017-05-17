import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PictureProvider } from "../../providers/picture.provider";
import { Picture } from "../../types/picture";
import { SharingProvider } from "../../providers/sharing.provider";



/**
 * Generated class for the GaleriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {
  Fotos: Picture[];
  private title: string;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public pictureProvider:PictureProvider,
    public sharingProvider: SharingProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriaPage');
    this.title = "galería";
    this.pictureProvider.listPictures()
    .then((pictures)=>{
      this.Fotos = pictures;})
;
  }

  sharePicture(picture: Picture) {
    this.sharingProvider.share(picture);
  }

}
