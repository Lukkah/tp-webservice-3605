import { Component, OnInit } from '@angular/core';
import { HoroscopoClase } from 'src/app/models/horoscopo-clase';
import { HoroscopoSerService } from 'src/app/services/horoscopo-ser.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  horoscopo:HoroscopoClase;
  signos:Array<any>;
  constructor(private horoscopoSercice:HoroscopoSerService) { 
    this.horoscopo=new HoroscopoClase();
    this.signos=new Array<any>();
    this.cargarHoroscopo();
  }

  ngOnInit(): void {
  }


  public cargarHoroscopo(){
    for(var i=0;i<11;i++){
      this.horoscopoSercice.listHoroscopo().subscribe(
        (result) => {
          this.signos = new Array<any>();
          this.signos.push(result["name"]);
          console.log(this.signos);
        },
        error => { alert("Error en la peticion de horoscopo");}
      )
    }
  }

}
