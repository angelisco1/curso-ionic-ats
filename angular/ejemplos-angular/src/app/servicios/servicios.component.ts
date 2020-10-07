import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit(): void {
  }

  enviarMsg(nombre: string) {
    // LLamar al servicio
    this.logService.mostrarMensaje(nombre);
  }

}
