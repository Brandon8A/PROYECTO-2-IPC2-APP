import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterServiceService } from '../../../../services/register-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuario-empleado.component.html',
  styleUrl: './crear-usuario-empleado.component.css'
})
export class CrearUsuarioEmpleadoComponent {
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
    this.registroServicio.crearEmpleado(this.registerForm.value).subscribe({
      next: (data) => {
        Swal.fire('Exito!', 'Usuario Empleado creado correctamente', 'success');
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