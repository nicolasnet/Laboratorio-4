import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  peticion: any;
  constructor( public miHttp: MiHttpService ) {

  }

 /* public   traerTodo(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
    .toPromise()
    .then( data => {
      console.log('Prueba');
      console.log( data );
      return data;
    }, err => {
      console.log( err );
    });
  }*/
}
