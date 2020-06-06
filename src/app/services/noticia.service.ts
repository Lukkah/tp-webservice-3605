import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }

  public listNoticias(categoria:string):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-host': 'livescore6.p.rapidapi.com',
	      'x-rapidapi-key': 'b44d370371msh0c28e6954b075efp1c516djsn13ee485d9f01',
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria,httpOptions);
  }
}
