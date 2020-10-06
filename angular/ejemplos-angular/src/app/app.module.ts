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

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    DataBindingComponent,
    CmpHijoComponent,
    DirectivasComponent,
    MarcarDirective,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
