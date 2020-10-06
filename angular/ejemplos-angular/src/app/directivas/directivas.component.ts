import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  colorNaranja: string = 'orange';
  formValido: boolean = false;

  mascotas: Array<string> = [
    'perro',
    'gato',
    'canario'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
