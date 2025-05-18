import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GestorServiciosServiceService } from '../../../services/gestor-servicios/gestor-servicios-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-servicio',
  imports: [ReactiveFormsModule],
  templateUrl: './editar-servicio.component.html',
  styleUrl: './editar-servicio.component.css'
})
export class EditarServicioComponent {
  registerForm: FormGroup;
  descripcion: FormControl;
  tiempoServicio: FormControl;
  precio: FormControl;
  emailGestorServicios: string = '';
  servicioEditar: string = '';

  constructor(public gestorServiciosServicio: GestorServiciosServiceService, private router: Router, private route: ActivatedRoute) {

    this.descripcion = new FormControl('', Validators.required);
    this.tiempoServicio = new FormControl('', Validators.required);
    this.precio = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      descripcion: this.descripcion,
      tiempoServicio: this.tiempoServicio,
      precio: this.precio
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailGestorServicios = params['email'];
      this.servicioEditar = params['servicio'];
    });
    console.log('Email en crear-servicio: ' + this.emailGestorServicios);
    console.log('Servicio a editar: ' + this.servicioEditar);
  }

  actualizarServicio(){
    console.log("Metodo actualizarServicio() en componente editar-servicio");
    this.gestorServiciosServicio.editarServicio(this.registerForm.value, this.servicioEditar, 'actualizarDatos').subscribe({
      next: value => {
        var email = this.emailGestorServicios;
        Swal.fire('Exito!', 'Servicio editado correctamente', 'success');
        this.router.navigate(['/home-gestor-servicios/info-home-gestor-servicios'], {
          queryParams: { emailLogueado: this.emailGestorServicios }
        });
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
