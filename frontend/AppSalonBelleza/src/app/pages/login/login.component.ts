import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterServiceService } from '../../services/register-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(public registroServicio: RegisterServiceService, private router: Router) {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  loguearUsuario() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.registroServicio.loguearUsuario(this.loginForm.value).subscribe({
      next: datos => {
        const emailLogueado = datos.email;
        Swal.fire('Exito!', 'Bienvenido', 'success');
        if (datos.rol === 'Administrador') {
          this.router.navigate(['/home-admin'], {
            queryParams: { emailLogueado }
          });
        } else if (datos.rol === 'Cliente') {
          this.router.navigate(['/home-cliente'], {
            queryParams: { emailLogueado, tipoLogin: 'login' }
          });
        } else if (datos.rol === 'GestorServicios'){
          this.router.navigate(['/home-gestor-servicios'], {
            queryParams: { emailLogueado }
          });
        } else if (datos.rol === 'Marketing'){
          this.router.navigate(['/home-marketing'], {
            queryParams: { emailLogueado }
          });
        } else if (datos.rol === 'Empleado'){
          this.router.navigate(['/home-empleado'], {
            queryParams: { emailLogueado }
          });
        }
      },
      error: (error) => {
        console.log(error)
        Swal.fire('Error!', 'Correo o contraseña incorrectos', 'error');
        this.router.navigate(['/login']);
        this.loginForm.reset();
      }
    })
  }
}