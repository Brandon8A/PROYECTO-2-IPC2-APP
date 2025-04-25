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
      next: (data) => {
        Swal.fire('Exito!', 'Bienvenido', 'success');
        console.log(data);
      },
      error: (error) => {
        console.log(error)
        Swal.fire('Error!', 'Correo o contraseña incorrectos', 'success');
        this.router.navigate(['/login']);
        this.loginForm.reset();
      }
    })
  }
}