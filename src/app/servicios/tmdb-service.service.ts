import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TmdbServiceService {

  apiKey:String = "bfeb8a84c3b0807fee75f632b709ffaf";
  busqueda:String = "";
  type:String="movie";
  language:String="&language=en-US";

  constructor(private http: HttpClient) { }

  mostrarLista(busqueda:String): Observable<any>{
    //return this.http.get<any>('https://api.themoviedb.org/3/search/' + this.type + '?api_key=' + this.apiKey + this.language + '&query=' + busqueda);
    //return this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + busqueda);
    return this.http.get('https://api.themoviedb.org/3/search/' + this.type + '?api_key=' + this.apiKey + this.language + '&query=' + busqueda)
    .pipe(
      map(results => {
        console.log("RAW: " + results)
       return results ['results']})
    )
  }

  mostrarDetalles(id){
    return this.http.get<any>('https://api.themoviedb.org/3/search/movie/' + id + '?api_key=' + this.apiKey);
  }

}
