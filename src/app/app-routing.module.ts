import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasComponent } from './components/noticias/noticias.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { CoronaVirusComponent } from './components/corona-virus/corona-virus.component';
import { PoblacionComponent } from './components/poblacion/poblacion.component';


const routes: Routes = [
  {path: 'noticias', component:NoticiasComponent},
  {path: 'cotizacion', component:CotizacionComponent},
  {path: 'horoscopo', component:HoroscopoComponent},
  {path: 'covid', component:CoronaVirusComponent},
  {path: 'poblacion', component:PoblacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
