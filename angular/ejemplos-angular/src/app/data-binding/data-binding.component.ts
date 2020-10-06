import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  nombre: string = 'Ángel';
  nombreHijo: string = ''

  private _edad: number = 2;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarMensaje(msg: string) {
    alert(msg);
  }

  cambiarNombre() {
    this.nombre = 'Un cualquiera'
  }

  get edad() {
    return this._edad;
  }

}