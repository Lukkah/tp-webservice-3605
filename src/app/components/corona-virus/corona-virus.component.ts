import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { CovidSerService } from 'src/app/services/covid-ser.service';

@Component({
  selector: 'app-corona-virus',
  templateUrl: './corona-virus.component.html',
  styleUrls: ['./corona-virus.component.css']
})
export class CoronaVirusComponent implements OnInit {
  nombrePais:string;
  conf:boolean=true;
  rec:boolean=true;
  muert:boolean=true;

  resultado:Array<any>;
  pais: Pais;
  paises:Array<Pais>;
  constructor(private covidService:CovidSerService) { 
    this.pais= new Pais();
    this.paises=new Array<Pais>();
    this.resultado=Array<any>();
  }

  ngOnInit(): void {
  }


  public cargarPais(){
    this.covidService.getPais(this.nombrePais).subscribe(
      (result)=>{
        this.resultado=result;
        this.pais.nombrePais=this.resultado["Country_text"];
        this.pais.casosTotales=this.resultado["Total Cases_text"];
        this.pais.muertes=this.resultado["Total Deaths_text"];
        this.pais.recuperados=this.resultado["Total Recovered_text"];
        this.pais.casosActivos=this.resultado["Active Cases_text"];
      },
      error => { alert("Error en la peticion para casos de coronavirus");}
    )
  }

  public chec(e){
    if(e.target.checked==true)
      this.conf=true;
    else
      this.conf=false;
  }
  public chec2(e){
    if(e.target.checked==true)
      this.muert=true;
    else
      this.muert=false;
  }
  public chec3(e){
    if(e.target.checked==true)
      this.rec=true;
    else
      this.rec=false;
  }


}
