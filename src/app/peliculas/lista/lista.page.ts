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

  /**
   * 
   * @param tmdbService --> inyectamos nuestro servicio para poder utilizar sus metodos.
   */
  constructor(public tmdbService : TmdbServiceService) { }

  ngOnInit() {
  }

  /**
   * @method busqueda() --> con este metodo nos suscribimos al servicio que nosotros hemos creado y, llamando a su metodo "mostrarLista()" pasándole nuestro término de 
   * búsqueda, nos devolverá un array con las diferentes películas que ha encontrado en la base de datos que coinciden con nuestro término de búsqueda.
   */
  busqueda(){

   this.peliculasObservable = this.tmdbService.mostrarLista(this.terminoBusqueda);
   this.peliculasObservable.subscribe((dataPeliculas: any[]) =>{
     this.resultadoArray = dataPeliculas;

   })
  }
}
