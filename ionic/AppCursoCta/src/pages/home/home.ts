import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotoPage } from "../foto/foto";
import { MapaPage } from "../mapas/mapa";
import { GaleriaPage } from "../galeria/galeria";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  Foto()
  {
    console.log("foto");
    this.navCtrl.push(FotoPage);
  }
   

Mapa()
{
  console.log("mapa");
   this.navCtrl.push(MapaPage);
   
}
  aGaleria(){
    this.navCtrl.push(GaleriaPage)
    console.log("a Galeria que nos vamos");
  }
}
