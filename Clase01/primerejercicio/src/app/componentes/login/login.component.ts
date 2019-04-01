import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ususarios } from 'src/app/clases/ususarios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public unusuario: Ususarios;


  constructor(private router: Router) {
      this.unusuario = new Ususarios('Seba', 123456);
   }

  ngOnInit() {
  }

  navegar() {
    this.router.navigate(['/error', {id: 15}]);
  }

}
