import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { CmpHijoComponent } from './data-binding/cmp-hijo/cmp-hijo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { MarcarDirective } from './directivas/marcar.directive';
import { ServiciosComponent } from './servicios/servicios.component';
import { CmpAComponent } from './servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './servicios/cmp-b/cmp-b.component';
import { DatosService } from './servicios/datos.service';
import { FechaLogService, LogService } from './servicios/log.service';
import { HttpComponent } from './http/http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ObservableComponent } from './http/observable/observable.component';
import { FormOfertaComponent } from './http/form-oferta/form-oferta.component';
import { OfertaComponent } from './http/oferta/oferta.component';
import { AuthInterceptorService } from './http/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    DataBindingComponent,
    CmpHijoComponent,
    DirectivasComponent,
    MarcarDirective,
    ServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    HttpComponent,
    ObservableComponent,
    FormOfertaComponent,
    OfertaComponent,
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // DatosService
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
