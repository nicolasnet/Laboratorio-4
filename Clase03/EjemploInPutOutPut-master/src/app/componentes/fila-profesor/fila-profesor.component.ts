import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/clases/profesor';

@Component({
  selector: '[app-fila-profesor]',
  templateUrl: './fila-profesor.component.html',
  styleUrls: ['./fila-profesor.component.css']
})
export class FilaProfesorComponent implements OnInit {

  @Input()  unProfesor: Profesor;
  @Input() index: number;
  @Output() profesorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  mostrarDetalles(parametroProfesor)
  {
    console.log("Index: "+this.index);
    console.log(parametroProfesor);
    parametroProfesor.index=this.index;
    this.profesorSeleccionado.emit(parametroProfesor);
    console.log(parametroProfesor);
  }

}
