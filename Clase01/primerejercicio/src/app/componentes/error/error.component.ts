import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public numero: string;

  constructor(private route: ActivatedRoute) {
    this.numero = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
  }


}
