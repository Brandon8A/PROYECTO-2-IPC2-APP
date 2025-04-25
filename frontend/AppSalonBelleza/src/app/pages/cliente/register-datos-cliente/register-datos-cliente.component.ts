import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, Form } from '@angular/forms';
import { RegisterServiceService } from '../../../services/register-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';
import { CompartirDatosService } from '../../../services/compartir-datos.service';

@Component({
  selector: 'app-register-datos-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './register-datos-cliente.component.html',
  styleUrl: './register-datos-cliente.component.css'
})
export class RegisterDatosClienteComponent implements OnInit{

  registerForm: FormGroup;
  hobbies: FormControl;
  descripcion: FormControl;
  dpi: FormControl;
  phoneNumber: FormControl;
  address: FormControl;
  gustos: FormControl;
  email: FormControl;
  password: FormControl;

  constructor(public clienteServicio: ClienteServiceService, private router: Router, private datosRecibidos: CompartirDatosService) {

    this.hobbies = new FormControl('', Validators.required);
    this.descripcion = new FormControl('', Validators.required);
    this.dpi = new FormControl('', Validators.required);
    this.phoneNumber = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.gustos = new FormControl('', Validators.required);
    this.email = new FormControl('');
    this.password = new FormControl('');


    this.registerForm = new FormGroup({
      hobbies: this.hobbies,
      descripcion: this.descripcion,
      userDpi: this.dpi,
      userPhoneNumber: this.phoneNumber,
      userAddress: this.address,
      gustos: this.gustos
    });
  }

  ngOnInit(): void {
    this.datosRecibidos.correo$.subscribe(correo => {
      this.registerForm.patchValue({email: correo})
    })
  }

  

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    /* this.clienteServicio.crearCliente(this.registerForm.value).subscribe({
      next: (data) => {
        Swal.fire('Exito!', 'Usuario Cliente creado correctamente', 'success');
        console.log(data);
        this.router.navigate(['/home-admin/gestion-usuarios']);
      },
      error: (error) => {
        console.log(error)
      }
    }); */
    this.registerForm.reset();
  }
}
