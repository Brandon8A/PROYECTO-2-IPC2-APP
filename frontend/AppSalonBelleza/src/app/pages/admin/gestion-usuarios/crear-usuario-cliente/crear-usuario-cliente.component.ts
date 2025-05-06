import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminServicesService } from '../../../../services/admin/admin-services.service';

@Component({
  selector: 'app-crear-usuario-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuario-cliente.component.html',
  styleUrl: './crear-usuario-cliente.component.css'
})

export class CrearUsuarioClienteComponent {
  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  dpi: FormControl;
  phoneNumber: FormControl;
  address: FormControl;

  constructor(public servicioAdmin: AdminServicesService, private router: Router) {

    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.dpi = new FormControl('', Validators.required);
    this.phoneNumber = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      userDpi: this.dpi,
      userPhoneNumber: this.phoneNumber,
      userAddress: this.address
    });
  }

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.servicioAdmin.crearClienteAdmin(this.registerForm.value).subscribe({
      next: (data) => {
        Swal.fire('Exito!', 'Usuario Cliente creado correctamente', 'success');
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