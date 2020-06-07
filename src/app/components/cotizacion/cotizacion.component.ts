import { Component, OnInit } from '@angular/core';
import { CotizacionClase } from 'src/app/models/cotizacion-clase';
import { CotizacionSerService } from 'src/app/services/cotizacion-ser.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  cant:string;
  from:string;
  to:string;
  
  arreglo=["USD","ARS","EUR"];

  result:number;
  cotizacion:CotizacionClase;

  cotizacionesPaises:Array<CotizacionClase>;
  constructor(private cotizacionService:CotizacionSerService) {
    this.cotizacion=new CotizacionClase();
    this.cargarListaCotizacion();
    this.cant="1";
   }

  ngOnInit(): void {
  }

  public cargarCotizacion(){
    this.cotizacionService.cotizaciones(this.from,this.to,this.cant).subscribe(
      (result) => {
          this.cotizacion = new CotizacionClase();
          Object.assign(this.cotizacion,result);
          console.log(this.cotizacion);
      },
      error => { alert("No se pudo realizar la peticion de conversion de moneda");}
    )
  }

  
  public cargarListaCotizacion(){
    this.cotizacionesPaises=new Array<CotizacionClase>();
    this.arreglo.forEach(element1 =>{
      this.arreglo.forEach(element2 =>{
        this.cotizacionService.getCotizaciones(element1,element2,"1").subscribe(
          (result) => {
              this.cotizacion = new CotizacionClase();
              this.cotizacion.result=result;
              this.cotizacion.from_type=element1;
              this.cotizacion.to_type=element2;
              this.cotizacionesPaises.push(this.cotizacion);
          },
          error => { alert("No se pudo convertir las monedas");}    
        )
      })
    })
  }

}
