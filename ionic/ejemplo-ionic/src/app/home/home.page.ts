import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { StorageService } from '../storage.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios = [];
  listaUsuarios = [];

  constructor(
    private usuariosService: UsuariosService,
    private storageService: StorageService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }

  ionViewDidEnter() {
    this.initUsuarios();
  }

  eliminar(usuarioId) {
    this.storageService.deleteUsuario(usuarioId)
      .then(() => {
        this.initUsuarios();
      });
  }

  initUsuarios() {
    this.storageService.getUsuarios()
      .then((usuarios) => {
        this.listaUsuarios = usuarios;
      })
  }

  login() {
    this.loginService.toggleLogin();
  }

}
