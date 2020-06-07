import { Component, OnInit } from '@angular/core';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-poblacion',
  templateUrl: './poblacion.component.html',
  styleUrls: ['./poblacion.component.css']
})
export class PoblacionComponent implements OnInit {

  nombrePais:string;
  
  pais: Pais;
  resultado:Array<any>;
  constructor(private poblacionService:PoblacionService) { 
    this.pais=new Pais();
    this.resultado=new Array<any>();
    this.cargarPaises();
  }
  ngOnInit(): void {
  }


  
  public cargarPais(){
    this.poblacionService.getPopulation(this.nombrePais).subscribe(
      (result)=>{
        console.log(result);
        this.resultado=result["body"];
        console.log(this.resultado);
        this.pais.nombrePais=this.resultado["country_name"];
        this.pais.population=this.resultado["population"];
        this.pais.ranking=this.resultado["ranking"];
      },
      error => { alert("Error en la peticion para poblacion mundial");}
    )
  }

  public cargarPaises(){
    this.poblacionService.getPoblaciones().subscribe(
      (result) =>{
        console.log(result);
        this.resultado=result["body"]["countries"];
        console.log(this.resultado);
      }
    )
  }

}
