import { Component, OnInit } from '@angular/core';
import { Ususarios } from 'src/app/clases/ususarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public unsuario: Ususarios;


  constructor() {
      this.unsuario = new Ususarios('Nicolas', 123456);
   }

  ngOnInit() {
  }

}
