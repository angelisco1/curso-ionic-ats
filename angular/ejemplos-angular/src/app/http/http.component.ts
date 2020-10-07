import { Component, OnInit } from '@angular/core';
import { OfertasTrabajoService } from './ofertas-trabajo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  mostrarObservables: boolean = true;
  ofertas = [];
  subscription: Subscription = null;

  constructor(private ofertasService: OfertasTrabajoService) { }

  ngOnInit(): void {
    this.subscription = this.ofertasService.getOfertas()
      .subscribe((ofertas) => {
        console.log(ofertas)
        this.ofertas = ofertas;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
