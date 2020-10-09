import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getPosition() {
    return Geolocation.getCurrentPosition();
  }

}
