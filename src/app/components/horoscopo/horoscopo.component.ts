import { Component, OnInit } from '@angular/core';
import { HoroscopoClase } from 'src/app/models/horoscopo-clase';
import { HoroscopoSerService } from 'src/app/services/horoscopo-ser.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  arreglo:Array<any>;
  horoscopoDia:HoroscopoClase;
  horoscopo:HoroscopoClase;
  signos:Array<any>;
  constructor(private horoscopoSercice:HoroscopoSerService) { 
    this.horoscopo=new HoroscopoClase();
    this.signos=new Array<any>();
    this.cargarHoroscopo();
    this.cargarHoroscopoDia();
  }

  ngOnInit(): void {
  }


  public cargarHoroscopo(){

      this.horoscopoSercice.listHoroscopo().subscribe(
        (result) => {
          this.signos = new Array<any>();
          this.signos=result;
          console.log(this.signos);
        },
        error => { alert("Error en la peticion de horoscopo");}
      )
  }



  public cargarHoroscopoDia(){
    this.horoscopoSercice.cargarHoroscopo().subscribe(  
      (result) => {
        console.log(result);
        this.horoscopoDia=new HoroscopoClase();
        this.arreglo = new Array <any>();
        this.arreglo.push(result['sign']);
        this.arreglo.push(result['result']);
      }
    )
  }
}
