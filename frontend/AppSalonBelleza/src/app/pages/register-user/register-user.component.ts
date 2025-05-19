import { Component, ElementRef, Inject, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from '../../services/register-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CompartirDatosService } from '../../services/compartir-datos.service';

@Component({
  selector: 'app-register-user',
  imports: [ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  emailCliente: string = '';
  passwordCliente: string = '';

  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  rol: FormControl;


  constructor(public registroServicio: RegisterServiceService, private router: Router,
     public datosCompartidos: CompartirDatosService) {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.rol = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      rol: this.rol
    });
  }


  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    var email = this.registerForm.get('email')?.value;
    var password = this.registerForm.get('password')?.value

    console.log(this.registerForm.value);
    if (this.rol.value.toLowerCase() === 'administrador') {
      this.registroServicio.crearAdministrador(this.registerForm.value).subscribe({
        next: data => {
          Swal.fire('Exito!', 'Administrador creado correctamente', 'success');
          console.log(data);
          this.router.navigate(['/home-admin']);
        },
        error: (error) => {
          console.log(error)
        }
      });
    } else if (this.rol.value.toLowerCase() === 'cliente') {
      this.registroServicio.crearCliente(this.registerForm.value).subscribe({
        next: data =>{
          this.router.navigate(['registro-datos-cliente'], {
            queryParams: { email }
          })
        }
      })
      /* this.registroServicio.crearCliente(this.registerForm.value).subscribe({
        next: data => {
          Swal.fire('Exito!', 'Cliente creado correctamente', 'success');
          console.log(data);
          this.router.navigate(['/registro-datos-cliente'], {
            queryParams: { data.email }});
        }
      }) */
    } else if (this.rol.value.toLowerCase() === 'empleado') {
      console.log('Mostrar home-empleado');
      
    } else if (this.rol.value.toLowerCase() === 'gestor_servicios') {
      console.log('Mostrar home-gestor-servicios');
      this.registroServicio.crearGestorServicios(this.registerForm.value).subscribe({
        next: data => {
          Swal.fire('Exito!', 'Gestor de servicios creado correctamente', 'success');
          console.log(data);
          this.router.navigate(['/home-gestor-servicios'], {
            queryParams: { email }
          });
        },
        error: (error) => {
          console.log(error)
        }
      });
    } else {
      console.log('Mostrar home-marketing');
    }
    this.registerForm.reset();
  }
}