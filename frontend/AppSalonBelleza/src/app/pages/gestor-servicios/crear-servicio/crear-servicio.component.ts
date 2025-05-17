import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GestorServiciosServiceService } from '../../../services/gestor-servicios/gestor-servicios-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-servicio',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-servicio.component.html',
  styleUrl: './crear-servicio.component.css'
})
export class CrearServicioComponent {
  registerForm: FormGroup;
  nombreServicio: FormControl;
  descripcion: FormControl;
  tiempoServicio: FormControl;
  precio: FormControl;
  emailGestorServicios: string = '';

  constructor(public gestorServiciosServicio: GestorServiciosServiceService, private router: Router, private route: ActivatedRoute) {

    this.nombreServicio = new FormControl('', Validators.required);
    this.descripcion = new FormControl('', Validators.required);
    this.tiempoServicio = new FormControl('', Validators.required);
    this.precio = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      nombreServicio: this.nombreServicio,
      descripcion: this.descripcion,
      tiempoServicio: this.tiempoServicio,
      precio: this.precio
    });
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.emailGestorServicios = params['email'];
    });
    console.log('Email en crear-servicio: '+this.emailGestorServicios);
  }

  crearServicio() {
    this.gestorServiciosServicio.crearServicio(this.registerForm.value, this.emailGestorServicios).subscribe({
      next: data => {
        var email = this.emailGestorServicios;
        Swal.fire('Exito!', 'Servicio creado correctamente', 'success');
        console.log('Email en crearServicio metodo crearServicio(): '+ email);
        this.router.navigate(['/home-gestor-servicios/info-home-gestor-servicios'], {
          queryParams: { emailLogueado: this.emailGestorServicios }
        });
      },
      error: error => {
        console.log(error);
        alert('Error al crear el servicio');
      }
    });
  }
}