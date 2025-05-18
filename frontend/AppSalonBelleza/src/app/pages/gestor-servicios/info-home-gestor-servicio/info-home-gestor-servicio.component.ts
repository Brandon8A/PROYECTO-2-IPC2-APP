import { Component } from '@angular/core';
import { Servicios } from '../../../interfaces/servicios';
import { ActivatedRoute, Router } from '@angular/router';
import { GestorServiciosServiceService } from '../../../services/gestor-servicios/gestor-servicios-service.service';

@Component({
  selector: 'app-info-home-gestor-servicio',
  imports: [],
  templateUrl: './info-home-gestor-servicio.component.html',
  styleUrl: './info-home-gestor-servicio.component.css'
})
export class InfoHomeGestorServicioComponent {

  servicios: Servicios[] = [];
  emailLogueado: string = '';

  constructor(public route: ActivatedRoute, public gestorServiciosService: GestorServiciosServiceService, public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
    });
    this.obtenerServicios();
    console.log("Email logueado en info-home-gestor-servicio: " + this.emailLogueado);
  }

  obtenerServicios() {
    this.gestorServiciosService.obtenerServicios().subscribe({
      next: value => {
        console.log(value);
        this.servicios = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  crearServicio() {
    this.router.navigate(['/home-gestor-servicios/crear-servicio'], {
      queryParams: { email: this.emailLogueado }
    });
  }

  editar(servicioAEditar: string) {
    this.router.navigate(['/home-gestor-servicios/editar-servicio'], {
      queryParams: { email: this.emailLogueado, servicio: servicioAEditar }
    });
  }

  mostrar(servicio: Servicios, nombreServicio: string) {
    this.gestorServiciosService.mostrarServicio(servicio, nombreServicio, 'mostrar').subscribe({
      next: data => {
        console.log(data);
        this.obtenerServicios();
        this.router.navigate(['/home-gestor-servicios/info-home-gestor-servicios'], {
          queryParams: { emailLogueado: this.emailLogueado }
        });
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ocultar(servicio: Servicios, nombreServicio: string) {
    this.gestorServiciosService.ocultarServicio(servicio, nombreServicio, 'ocultar').subscribe({
      next: data => {
        console.log(data);
        this.obtenerServicios();
        this.router.navigate(['/home-gestor-servicios/info-home-gestor-servicios'], {
          queryParams: { emailLogueado: this.emailLogueado }
        });
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
