import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

export type MapOptions = google.maps.MapOptions;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, GoogleMap],
})
export class HomePage {
  readonly options: MapOptions = {
    mapId: 'locations',
    center: {
      lat: 29.42625156824674,
      lng: -98.48606954503964,
    },
    zoom: 10,
    clickableIcons: false,
    disableDefaultUI: true,
    mapTypeControl: false,
    panControl: true,
    rotateControl: true,
    scaleControl: true,
    streetViewControl: false,
  };
  //center: google.maps.LatLngLiteral = {lat: 40, lng: -20};
  center: google.maps.LatLngLiteral = {
    lat: 29.42625156824674,
    lng: -98.48606954503964
  };
  zoom = 10;
  constructor() {}
}
