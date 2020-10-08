import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
