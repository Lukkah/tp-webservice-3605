import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';

import { HttpClientModule } from '@angular/common/http';
import { CoronaVirusComponent } from './components/corona-virus/corona-virus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    CotizacionComponent,
    HoroscopoComponent,
    CoronaVirusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
