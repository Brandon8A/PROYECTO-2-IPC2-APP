import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';
import { CompartirDatosService } from '../../../services/compartir-datos.service';
import Swal from 'sweetalert2';

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
  emailCliente: string = '';

  constructor(public clienteServicio: ClienteServiceService, private router: Router, private route: ActivatedRoute) {

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
    this.route.queryParams.subscribe(params => {
      this.emailCliente = params['email'];
    });
    console.log(this.emailCliente);
  }

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.clienteServicio.actualizarDatosCliente(this.registerForm.value, this.emailCliente).subscribe({
      next: data => {
        const emailLogueado = data.email;
        Swal.fire('Exito!', 'Datos guardados correctamente', 'success');
        this.router.navigate(['/home-cliente'], {
          queryParams: { emailLogueado}
        });
        this.registerForm.reset();
      },
      error: error => {
        console.log(error);
        Swal.fire('Error!', 'No se pudo guardar los datos', 'error');
      }
    })
  }
}
