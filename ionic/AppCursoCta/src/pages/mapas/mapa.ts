import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { FotoPage } from "../foto/foto";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker 
} from '@ionic-native/google-maps';


@Component({
  selector: 'mapa-page',
  templateUrl: 'mapa.html'
})
export class MapaPage {

map: GoogleMap;
errores:string="";
 google: any;

  constructor(public navCtrl: NavController,public platform: Platform,private googleMaps: GoogleMaps,public toastCtrl: ToastController,public geolocation: Geolocation) {
  /*platform.ready().then(() => {
            this.mostrarToas("cargando");
            this.loadMap2();
        }
        ,
        (error)=>
        {
          this.mostrarToas("error de plataforma");
        });
*/
  }


loadMap(){

     this.mostrarToas("Localizacion");
 
        let location = new LatLng(-0.9110671,41.6374554);
 
  this.mostrarToas("mapa");
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
           this.mostrarToas("Corecto");
        },(error)=>{

            this.mostrarToas(error);
        }
        );
 
    }



    loadMap2() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 this.mostrarToas("html");
 let element: HTMLElement = document.getElementById('map');

 this.mostrarToas("mapa");
 let map: GoogleMap = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway

  this.mostrarToas("ready");
 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     this.mostrarToas('Map is ready!');
     // Now you can add elements to the map like the marker
   }
 );

 // create LatLng object
 let ionic: LatLng = new LatLng(-0.9110671,41.6374554);

 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };

 this.mostrarToas("mover");
 // move the map's camera to position
 map.moveCamera(position);

}

// loadMap3(){

//     let location = new GoogleMapsLatLng(-0.9110671,41.6374554);

//     this.map = new GoogleMap('map', {
//       'backgroundColor': 'white',
//       'controls': {
//         'compass': true,
//         'myLocationButton': true,
//         'indoorPicker': true,
//         'zoom': true
//       },
//       'gestures': {
//         'scroll': true,
//         'tilt': true,
//         'rotate': true,
//         'zoom': true
//       },
//       'camera': {
//         'latLng': location,
//         'tilt': 30,
//         'zoom': 15,
//         'bearing': 50
//       }
//     });
// }
mostrarToas(mensaje) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 500,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

mostrarToas2(mensaje) {
 this.errores=this.errores+" " +mensaje;
}


ionViewDidLoad(){
    this.obtenerPosicion();
  }

  obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMapz(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMapz(postion: Geoposition){
    let latitude = postion.coords.latitude;
    let longitud = postion.coords.longitude;
    console.log(latitude, longitud);
   
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    // create LatLng object
    let myPosition: LatLng = new LatLng(latitude,longitud);

    // create CameraPosition
    let position: CameraPosition = {
      target: myPosition,
      zoom: 18,
      tilt: 30
    };

    map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      console.log('Map is ready!');

      // move the map's camera to position
      map.moveCamera(position);

      // create new marker
      let markerOptions: MarkerOptions = {
        position: myPosition,
        title: 'Here'
      };
      map.addMarker(markerOptions);
    });

  }

}