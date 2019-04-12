import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Boton1Component } from './componentes/boton1/boton1.component';
import { Boton2Component } from './componentes/boton2/boton2.component';
import { Boton3Component } from './componentes/boton3/boton3.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Boton1Component,
    Boton2Component,
    Boton3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
