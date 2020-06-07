import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionSerService {

  constructor(private _http: HttpClient) { }

  public cotizaciones(from:string,to:string,cant:string):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-host': 'community-neutrino-currency-conversion.p.rapidapi.com',
        'x-rapidapi-key': 'b44d370371msh0c28e6954b075efp1c516djsn13ee485d9f01',
        'content-type': 'application/x-www-form-urlencoded'
      }),

      params: {
        'from-type':from,
        'to-type':to,
        'from-value':cant
      }
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",'from-type/to-type/from-value' ,httpOptions);
  }


  public getCotizaciones(from:string,to:string,q:string):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
        'x-rapidapi-key': 'b44d370371msh0c28e6954b075efp1c516djsn13ee485d9f01',
      }),
      params: {
        'from':from,
        'to':to,
        'q':q
      }
    };
    return this._http.get("https://currency-exchange.p.rapidapi.com/exchange",httpOptions);
  }
}
