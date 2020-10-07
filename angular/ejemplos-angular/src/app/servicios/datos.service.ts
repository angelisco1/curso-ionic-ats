import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  enviarDato = new EventEmitter<string>();

  private datos: Array<string> = ['Item 1'];

  constructor(private logService: LogService) { }

  getDatos(): Array<string> {
    return this.datos;
  }

  addDato(dato: string): void {
    this.datos.push(dato);
    this.logService.mostrarMensaje('Nuevo dato añadido -> ' + dato);
  }

  sendDato(dato: string) {
    this.enviarDato.emit(dato);
  }
}
