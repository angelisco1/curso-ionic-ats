import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  mostrarMensaje(msg: string) {
    console.log('Msg: ' + msg)
  }
}


export class FechaLogService {
  constructor() { }

  mostrarMensaje(msg: string) {
    const fecha = new Date().toLocaleDateString();
    console.log(`[${fecha}] Msg: ${msg}`)
  }
}