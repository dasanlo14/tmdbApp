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


      //return this.http.get<any>('https://api.themoviedb.org/3/search/' + this.type + '?api_key=' + this.apiKey + this.language + '&query=' + busqueda);


  mostrarLista(busqueda:String){
    
    
    //return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + busqueda).pipe(map(results =>  results ['results']));

    this.resultados =  this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + busqueda)
    .pipe(
      map(results => {
        console.log('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + busqueda);
        console.log(results)
        return results ['results']
      }))
    return this.resultados;

  }

  mostrarDetalles(id){
    //return this.http.get<any>('https://api.themoviedb.org/3/search/movie/' + id + '?api_key=' + this.apiKey);
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.apiKey);
  }
}



