import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestorServiciosServiceService } from '../../../services/gestor-servicios/gestor-servicios-service.service';
import { Servicios } from '../../../interfaces/servicios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reportes-gestor-servicios',
  imports: [ReactiveFormsModule],
  templateUrl: './reportes-gestor-servicios.component.html',
  styleUrl: './reportes-gestor-servicios.component.css'
})
export class ReportesGestorServiciosComponent {

  formularioFechasMasReservados: FormGroup;
  formularioFechasMenosReservados: FormGroup;

  emailLogueado: string = '';
  servicioQueGeneraMasIngresos: Servicios[] = [];
  serviciosMasReservados: Servicios[] = [];
  serviciosMenosReservados: Servicios[] = [];

  constructor(private fb: FormBuilder,public route: ActivatedRoute, public gestorServiciosService: GestorServiciosServiceService, public router: Router) { 
    this.formularioFechasMasReservados = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
    this.formularioFechasMenosReservados = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
    });
    console.log("Email logueado en info-home-gestor-servicio: " + this.emailLogueado);
    this.obtenerServicioGeneraMasIngreso();
    this.obtenerServiciosMasReservados();
    this.obtenerServiciosMenosReservados(); 
  }

  obtenerServiciosMenosReservados(){
    this.gestorServiciosService.obtenerServiciosMasReservados('serviciosMenosReservados').subscribe({
      next: value => {
        this.serviciosMenosReservados = value;
        console.log(value);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  obtenerServiciosMasReservados(){
    this.gestorServiciosService.obtenerServiciosMasReservados('serviciosMasReservados').subscribe({
      next: value => {
        this.serviciosMasReservados = value;
        console.log(value);
      },
      error: err => {
        console.log(err);
      }
    })
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

  obtenerServiciosMasReservadosPorFecha(){
    this.gestorServiciosService.obtenerServiciosMasReservadosPorFecha('serviciosMasReservadosPorFecha', this.formularioFechasMasReservados.value).subscribe({
      next: value => {
        this.serviciosMasReservados = value;
        console.log(this.servicioQueGeneraMasIngresos);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  obtenerServiciosMenosReservadosPorFecha(){
    this.gestorServiciosService.obtenerServiciosMasReservadosPorFecha('serviciosMenosReservadosPorFecha', this.formularioFechasMenosReservados.value).subscribe({
      next: value => {
        this.serviciosMenosReservados = value;
        console.log(this.servicioQueGeneraMasIngresos);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
