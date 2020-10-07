import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  // providers: [
  //   DatosService
  // ]
})
export class CmpBComponent implements OnInit {
  datos: Array<string> = [];
  datoRecibido: string = '';

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos();
    this.datosService.enviarDato.subscribe((dato) => {
      this.datoRecibido = dato;
    });
  }

  add(nuevoDato: string) {
    this.datosService.addDato(nuevoDato);
  }
}
