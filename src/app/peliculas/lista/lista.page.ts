import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TmdbServiceService } from 'src/app/servicios/tmdb-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  terminoBusqueda = "";
  resultadosBusqueda: Observable<any>;
  
  constructor(private tmdbService : TmdbServiceService) { }

  ngOnInit() {
  }

  busqueda(){
    this.resultadosBusqueda = this.tmdbService.mostrarLista(this.terminoBusqueda);
  }
}
