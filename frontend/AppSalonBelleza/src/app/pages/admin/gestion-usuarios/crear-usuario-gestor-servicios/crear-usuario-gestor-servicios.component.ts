import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterServiceService } from '../../../../services/register-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario-gestor-servicios',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuario-gestor-servicios.component.html',
  styleUrl: './crear-usuario-gestor-servicios.component.css'
})
export class CrearUsuarioGestorServiciosComponent {
  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(public registroServicio: RegisterServiceService, private router: Router) {

    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.registroServicio.crearGestorServicios(this.registerForm.value).subscribe({
      next: (data) => {
        Swal.fire('Exito!', 'Usuario Gestor Servicios creado correctamente', 'success');
        console.log(data);
        this.router.navigate(['/home-admin/gestion-usuarios']);
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.registerForm.reset();
  }
}
