import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Boton1Component } from './componentes/boton1/boton1.component';
import { Boton2Component } from './componentes/boton2/boton2.component';
import { Boton3Component } from './componentes/boton3/boton3.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent ,
  children:
          [{path: 'boton1', component: Boton1Component},
           {path: 'boton2', component: Boton2Component},
           {path: 'boton3', component: Boton3Component}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
