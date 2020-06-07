import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoSerService {

  constructor(private _http: HttpClient) { }


  public listHoroscopo():Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-host': 'zodiac-sign.p.rapidapi.com',
	      'x-rapidapi-key': 'b44d370371msh0c28e6954b075efp1c516djsn13ee485d9f01',
      })
    };
    return this._http.get("https://zodiac-sign.p.rapidapi.com/signs",httpOptions);
  }


  public cargarHoroscopo():Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-host': 'horoscope5.p.rapidapi.com',
        'x-rapidapi-key': 'b44d370371msh0c28e6954b075efp1c516djsn13ee485d9f01',
      })
    };
    return this._http.get("https://horoscope5.p.rapidapi.com/general/daily",httpOptions);
  }
}