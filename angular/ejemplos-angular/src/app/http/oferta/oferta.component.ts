import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  @Input() oferta = {
    titulo: '',
    ciudad: '',
    salario: 0,
    empresa: ''
  };
  fecha = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
