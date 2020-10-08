import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Array<any> = [
    { id: 1, nombre: 'Angel', apellido: 'Villalba' },
    { id: 2, nombre: 'Charly', apellido: 'Falco' },
    { id: 3, nombre: 'Arya', apellido: 'Stark' },
  ]

  constructor() { }

  getUsuarios() {
    return this.usuarios;
  }

  getUsuarioById(id: number) {
    return this.usuarios.find((usuario) => {
      return usuario.id == id;
    })
  }
}
