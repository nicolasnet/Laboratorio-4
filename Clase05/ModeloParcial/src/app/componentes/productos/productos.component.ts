import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listado: any;


  constructor(public miProductoServicio: ProductosService) { }

  ngOnInit() {
   /* this.miProductoServicio.traerTodo('prueba').then(data => {
      console.info ((data));
     //this.listado = data;

   });*/
  }


  TraerTodos(){
    // alert("totos");
    /*this.miProductoServicio.traerTodo('prueba').then(data => {
       console.info ((data));
      //this.listado = data;

    });*/
  }


}
