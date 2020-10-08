import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  usuario = {
    id: '',
    nombre: '',
    apellido: ''
  };

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuario = this.usuariosService.getUsuarioById(1);
  }

}
