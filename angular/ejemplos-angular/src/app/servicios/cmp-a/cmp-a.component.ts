import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { FechaLogService, LogService } from '../log.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  providers: [
    // DatosService
    { provide: LogService, useClass: FechaLogService }
  ]
})
export class CmpAComponent implements OnInit {
  datos: Array<string> = [];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos();
  }

  add(nuevoDato: string) {
    this.datosService.addDato(nuevoDato);
  }

  send(dato: string) {
    this.datosService.sendDato(dato);
  }
}
