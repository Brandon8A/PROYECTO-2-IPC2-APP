import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../share/header/header.component";
import { SliderClienteComponent } from "../share/slider-cliente/slider-cliente.component";
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-cliente',
  imports: [HeaderComponent, SliderClienteComponent, RouterOutlet, ReactiveFormsModule],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeClienteComponent implements OnInit{

  mostrarHome: boolean = true;

  selectedFile!: File;

  emailLogueado: string = '';
  fotoPerfil: string | null = null;

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


  constructor(private route: ActivatedRoute, public clienteServicio: ClienteServiceService, private router: Router){
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

  toogleHomeCliente(){
    this.mostrarHome = !this.mostrarHome;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
      this.fotoPerfil = params['pathFoto'];
      console.log('Email Logueado: '+this.emailLogueado);
      console.log('Path foto: '+this.fotoPerfil);
    })
  }

  onFileSelected(event: any) {
    //this.selectedFile = event.target.files[0];
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Mostrar la imagen seleccionada
      const reader = new FileReader();
      reader.onload = e => {
        this.fotoPerfil = (e.target as FileReader).result as string;
      };
      reader.readAsDataURL(this.selectedFile);

      // Subir imagen al backend
      this.uploadImage();
    }
  }

  seleccionarArchivo(): void {
    const input = document.getElementById('fileInput') as HTMLInputElement;
    input.click();
  }

  uploadImage(): void {
    if (!this.selectedFile) return;

    var formData = new FormData();
    formData.append('file', this.selectedFile);
    this.clienteServicio.actualizarFotoPerfil(formData, this.selectedFile).subscribe({
      next: data => {
        console.log('El path es: '+ data);
        Swal.fire('Exito', 'Foto de perfil actualizada', 'success');
        this.fotoPerfil = data;
      },
      error: error => {

      }
    })
  }

  actualizarDatosCliente(){
    console.log('Actualizar datos del cliente...');
    this.clienteServicio.actualizarDatosCliente(this.registerForm.value, this.emailLogueado).subscribe({
      next: data => {
        console.log('Datos del cliente actualizados');
        Swal.fire('Exito', 'Datos actualizados correctamente', 'success');
        this.router.navigate(['/home-cliente'], { queryParams: { emailLogueado: this.emailLogueado, pathFoto: this.fotoPerfil } });
      },
      error: error => {
        console.error('Error al actualizar los datos del cliente', error);
        Swal.fire('Error', 'No se pudieron actualizar los datos', 'error');
      }
    })
  }
}