import { Component, OnInit } from '@angular/core';
import { TmdbServiceService } from 'src/app/servicios/tmdb-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public tmbdService: TmdbServiceService) { }

  detalles = null; 
  id = null;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.tmbdService.mostrarDetalles(this.id).subscribe(result =>{
      console.log(result);
      this.detalles = result;
    })

  }

}
