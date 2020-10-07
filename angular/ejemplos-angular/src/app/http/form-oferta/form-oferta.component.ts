import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfertasTrabajoService } from '../ofertas-trabajo.service';

@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.component.html',
  styleUrls: ['./form-oferta.component.css']
})
export class FormOfertaComponent implements OnInit {
  subscription: Subscription = null;

  constructor(private ofertasService: OfertasTrabajoService) { }

  ngOnInit(): void {
  }

  guardar(t, c, s, e) {
    const nuevaOferta = {
      titulo: t,
      ciudad: c,
      empresa: e,
      salario: s
    }
    this.subscription = this.ofertasService.createOferta(nuevaOferta)
      .subscribe((datos) => {
        console.log(datos);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
