import { Component, OnInit } from '@angular/core';
import { TmdbServiceService } from 'src/app/servicios/tmdb-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  /**
   * 
   * @param activatedRoute --> utilizado para poder recuperar datos.
   * @param tmbdService  --> servicio inyectado para poder utilizar sus métodos.
   */
  constructor(private activatedRoute: ActivatedRoute, public tmbdService: TmdbServiceService) { }

  detalles = null; 
  id = null;

  /**
   * Cuando accedemos a la página de detalles lo primero que hacemos es utilizar el modulo ActivatedRoute para poder 
   * recuperar el "id" que hemos pasado a traves de la url.
   * 
   * Una vez recuperado el "id" podemos suscribirnos al metodo de nuestro servicio "mostrarDetalles(id)" para que nos devuelva
   * un objeto donde se encuentran los parametros de la pelicula deseada (titulo, poster, generos, etc).
   * 
   */
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.tmbdService.mostrarDetalles(this.id).subscribe(result =>{
      console.log(result);
      this.detalles = result;
    })

  }

}
