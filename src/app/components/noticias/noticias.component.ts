import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  categoria:string;
  noticia:Noticia;
  noticiasVector:Array<Noticia>;

  constructor(private noticiaService: NoticiaService) { 
    this.noticia=new Noticia();
    this.noticiasVector=new Array<Noticia>();
    this.categoria="basketball";
    this.cargarNoticias();
  }

  ngOnInit(): void {
  }

  public cargarNoticias(){
    this.noticiaService.listNoticias(this.categoria).subscribe(
      (result) => {
        this.noticiasVector = new Array<Noticia>();
        result['arts'].forEach(element =>{
          this.noticia = new Noticia();
          Object.assign(this.noticia,element);
          this.noticiasVector.push(this.noticia);
        });
        console.log(this.noticiasVector);
      },
      error => { alert("Error en la peticion");}
    )
  }
}
