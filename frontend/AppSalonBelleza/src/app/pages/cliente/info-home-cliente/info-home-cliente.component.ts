import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-home-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './info-home-cliente.component.html',
  styleUrl: './info-home-cliente.component.css'
})
export class InfoHomeClienteComponent {

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

  emailLogueado: string = '';
  pathFoto: string = '';

  constructor(public clienteServicio: ClienteServiceService, private router: Router, private route: ActivatedRoute){
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
      this.emailLogueado = params['emailLogueado'];
      console.log('Email Logueado: '+this.emailLogueado);
    })
  }

  actualizarDatosCliente(){
    console.log('Actualizar datos del cliente...');
    this.clienteServicio.actualizarDatosCliente(this.registerForm.value, this.emailLogueado).subscribe({
      next: data => {
        console.log('Datos del cliente actualizados');
        Swal.fire('Exito', 'Datos actualizados correctamente', 'success');
        this.router.navigate(['/home-cliente'], { queryParams: { emailLogueado: this.emailLogueado} });
      },
      error: error => {
        console.error('Error al actualizar los datos del cliente', error);
        Swal.fire('Error', 'No se pudieron actualizar los datos', 'error');
      }
    })
  }
}
