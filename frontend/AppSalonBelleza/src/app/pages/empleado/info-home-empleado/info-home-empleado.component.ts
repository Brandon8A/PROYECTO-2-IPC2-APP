import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoServicioService } from '../../../services/empleado/empleado-servicio.service';
import { Cita } from '../../../interfaces/cita';

@Component({
  selector: 'app-info-home-empleado',
  imports: [],
  templateUrl: './info-home-empleado.component.html',
  styleUrl: './info-home-empleado.component.css'
})
export class InfoHomeEmpleadoComponent {

  emailLogueado: string = '';
  citas: Cita[] = [];

  constructor(public route: ActivatedRoute, public empleadoServiciosService: EmpleadoServicioService, public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
    });
    this.obtenerCitas();
    console.log("Email logueado en info-home-gestor-servicio: " + this.emailLogueado);
  }

  obtenerCitas(){
    this.empleadoServiciosService.obtenerCitas(this.emailLogueado).subscribe({
      next: value => {
        console.log(value);
        this.citas = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
