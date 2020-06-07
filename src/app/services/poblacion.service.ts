import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoblacionService {

  constructor(private _http:HttpClient) { }

  public getPopulation(nombrePais:String):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-host':'world-population.p.rapidapi.com',
        'x-rapidapi-key':'b44d370371msh0c28e6954b075efp1c516djsn13ee485d9f01'
      })
    };
    return this._http.get("https://world-population.p.rapidapi.com/population?country_name="+nombrePais,httpOptions);
  }


  public getPoblaciones():Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-host':'world-population.p.rapidapi.com',
        'x-rapidapi-key':'b44d370371msh0c28e6954b075efp1c516djsn13ee485d9f01'
      })
    };
    return this._http.get("https://world-population.p.rapidapi.com/allcountriesname",httpOptions);
  }

}
