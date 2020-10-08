import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute, private usuariosService: UsuariosService) { }

  ngOnInit() {
    let usuarioId = parseInt(this.activatedRoute.snapshot.paramMap.get('usuarioId'));
    this.usuario = this.usuariosService.getUsuarioById(usuarioId);
  }

}
