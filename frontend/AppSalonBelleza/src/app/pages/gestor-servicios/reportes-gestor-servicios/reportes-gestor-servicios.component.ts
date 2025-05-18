import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestorServiciosServiceService } from '../../../services/gestor-servicios/gestor-servicios-service.service';
import { Servicios } from '../../../interfaces/servicios';

@Component({
  selector: 'app-reportes-gestor-servicios',
  imports: [],
  templateUrl: './reportes-gestor-servicios.component.html',
  styleUrl: './reportes-gestor-servicios.component.css'
})
export class ReportesGestorServiciosComponent {

  emailLogueado: string = '';
  servicioQueGeneraMasIngresos: Servicios[] = [];

  constructor(public route: ActivatedRoute, public gestorServiciosService: GestorServiciosServiceService, public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
    });
    console.log("Email logueado en info-home-gestor-servicio: " + this.emailLogueado);
    this.obtenerServicioGeneraMasIngreso();
  }

  obtenerServiciosMasReservados(){

  }

  obtenerServiciosMenosReservados(){

  }

  obtenerServicioGeneraMasIngreso(){
    this.gestorServiciosService.obtenerServicioQueGeneraMasIngreso('servicioQueGeneraMasIngresos').subscribe({
      next: value => {
        this.servicioQueGeneraMasIngresos = value;
        console.log(this.servicioQueGeneraMasIngresos);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
