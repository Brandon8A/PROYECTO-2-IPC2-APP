import { Component, ElementRef, Inject, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from '../../services/register-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  imports: [ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  
    registerForm: FormGroup;
    email: FormControl;
    password: FormControl;
    rol: FormControl;


    constructor(public registroServicio: RegisterServiceService, private router: Router){
      this.email = new FormControl('', Validators.required);
      this.password = new FormControl('', Validators.required);
      this.rol = new FormControl('', Validators.required);

      this.registerForm = new FormGroup({
        email: this.email,
        password: this.password,
        rol: this.rol
      });
    }


  registerUser(){
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    if (this.rol.value.toLowerCase() === 'administrador') {
      this.registroServicio.crearAdministrador(this.registerForm.value).subscribe({
        next: (data) => {
          Swal.fire('Exito!', 'Administrador creado correctamente', 'success');
          console.log(data);
          this.router.navigate(['/home-admin']);
        },
        error: (error)=>{
          console.log(error)
        }
      });
    }else{
      console.log('No es administrador')
    }

    this.registerForm.reset();
  }

}