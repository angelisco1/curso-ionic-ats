import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-hijo',
  templateUrl: './cmp-hijo.component.html',
  styleUrls: ['./cmp-hijo.component.css']
})
export class CmpHijoComponent implements OnInit {
  @Input() nombreArriba: string = '';
  nombre: string = 'Robb';
  @Output('recibirNombre') emitirNombre = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirNombreHijo() {
    this.emitirNombre.emit(this.nombre);
  }

}
