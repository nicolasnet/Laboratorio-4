import { Component, OnInit, Input } from '@angular/core';
import { Ususarios } from 'src/app/clases/ususarios';


@Component({
  selector: 'app-imputejemplo',
  templateUrl: './imputejemplo.component.html',
  styleUrls: ['./imputejemplo.component.css']
})
export class ImputejemploComponent implements OnInit {

  @Input() dato: Ususarios;

  constructor() { }

  ngOnInit() {
  }

}
