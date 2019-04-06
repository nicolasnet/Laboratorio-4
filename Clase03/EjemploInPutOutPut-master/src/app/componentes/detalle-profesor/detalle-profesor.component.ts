import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Profesor } from '../../clases/profesor';
@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.component.html',
  styleUrls: ['./detalle-profesor.component.css']
})
export class DetalleProfesorComponent implements OnInit {

 @Input() unProfesor:Profesor;
 @Output() profesorABorrar: EventEmitter<any> = new EventEmitter<any>();
  constructor() { 
  //  this.unProfesor= new Profesor("peres","matematica",888);

  }

  ngOnInit() {
  }

  borraProfesor(profesorElegido: Profesor){
    this.profesorABorrar.emit(profesorElegido);
  }

}
