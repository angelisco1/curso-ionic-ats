import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasTrabajoService {
  private URL: string = 'https://fluentjobs-fa22e.firebaseio.com/curso-ionic/angel';


  constructor(private http: HttpClient) { }

  getOfertas() {
    return this.http.get(`${this.URL}.json`)
      .pipe(
        map(datos => {
          const ofertas = [];

          for (let key in datos) {
            ofertas.push({
              id: key,
              ...datos[key]
            })
          }

          return ofertas;
        })
      );
  }

  createOferta(ofertaNueva) {
    console.log(ofertaNueva)
    return this.http.post(
      `${this.URL}.json`,
      JSON.stringify(ofertaNueva)
    );
  }

}
