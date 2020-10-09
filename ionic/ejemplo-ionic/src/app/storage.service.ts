import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  getUsuarios() {
    return Storage.get({ key: 'usuarios' })
      .then((data) => {
        // console.log(data.value);
        return data.value ? JSON.parse(data.value) : [];
      })
  }

  saveUsuario(usuario) {
    return this.getUsuarios()
      .then((usuarios) => {
        return Storage.set({
          key: 'usuarios',
          value: JSON.stringify([...usuarios, usuario])
        })
      })
  }

  deleteUsuario(usuarioId) {
    return this.getUsuarios()
      .then((usuarios) => {
        const usuariosFiltrados = usuarios.filter(usuario => {
          return usuario.id != usuarioId;
        });

        return Storage.set({
          key: 'usuarios',
          value: JSON.stringify(usuariosFiltrados)
        })
      })
  }

}
