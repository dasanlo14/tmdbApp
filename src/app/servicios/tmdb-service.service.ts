import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class TmdbServiceService {

  apiKey:String = "bfeb8a84c3b0807fee75f632b709ffaf";
  busqueda:String = "";
  type:String="movie";
  language:String="&language=en-US";

  resultados:Observable<any>;

  constructor(private http: HttpClient) { }
  
  /**
   * 
   * @param busqueda --> Término que nosotros queremos buscar en la base de datos
   * 
   * @method  mostrarLista(busqueda) --> Este método se conecta con la API de "The Movie Database" a través de un enlace en el cual se encuentra nuestro
   * término de búsqueda y nuestra clave de la API. Nos devuelve un objeto Observable el cual filtramos para obtener únicamente los campos que nosotros queremos,
   * en este caso, el campo "results" que contiene las peliculas que coinciden con nuestro término de búsqueda.
  
   */
  mostrarLista(busqueda:String){
      
    this.resultados =  this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + busqueda)
    .pipe(
      map(results => {
        console.log('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + busqueda);
        console.log(results)
        return results ['results']
      }))
    return this.resultados;

  }

  /**
   * 
   * @param id --> id de la pelicula que nosotros hemos elegido.
   * 
   * @method mostrarDetalles(id) --> Este metodo nos devuelve un objeto Observable con los parametros de la pelicula que nosotros hayamos elegido.
   */

  mostrarDetalles(id){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.apiKey);
  }
}



