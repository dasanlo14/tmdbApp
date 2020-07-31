import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TmdbServiceService } from 'src/app/servicios/tmdb-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  github = "https://github.com/dasanlo14";

  terminoBusqueda = "";
  resultadosBusqueda:Observable<any>;
  resultadoArray:any[];
  peliculasObservable = null;

  constructor(public tmdbService : TmdbServiceService) { }

  ngOnInit() {
  }

  busqueda(){
   
    // this.resultadosBusqueda = this.tmdbService.mostrarLista(this.terminoBusqueda);

   /*  this.tmdbService.mostrarLista(this.terminoBusqueda).subscribe(result => {
      this.resultadosBusqueda = result;
    }); */

   this.peliculasObservable = this.tmdbService.mostrarLista(this.terminoBusqueda);
   this.peliculasObservable.subscribe((dataPeliculas: any[]) =>{
     this.resultadoArray = dataPeliculas;
   })
  }
}
