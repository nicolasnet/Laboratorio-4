import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

@Injectable()
export class MiHttpService {
  api = 'http://niconetgomez.000webhostapp.com/';
  constructor( public http: Http ) {

   }

  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO ( metodo: string): Observable<any>
  {
    return this.http.get(this.api + metodo )
      .pipe( ( res ) => res);
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
