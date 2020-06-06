import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidSerService {

  constructor(private _http:HttpClient) { }

  public getPais(nombrePais:String):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'x-rapidapi-host':'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key':'b44d370371msh0c28e6954b075efp1c516djsn13ee485d9f01'
      })
    };
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+nombrePais,httpOptions);
  }


}
