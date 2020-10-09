import { Component, OnInit } from '@angular/core';
import { GeolocationPosition } from '@capacitor/core';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.page.html',
  styleUrls: ['./ubicaciones.page.scss'],
})
export class UbicacionesPage implements OnInit {
  position: GeolocationPosition;
  
  constructor(private geoService: GeolocationService) { }

  ngOnInit() {
  }

  mostrarUbicacion() {
    this.geoService.getPosition()
      .then((position) => {
        console.log(position)
        this.position = position;
      })
  }

}
