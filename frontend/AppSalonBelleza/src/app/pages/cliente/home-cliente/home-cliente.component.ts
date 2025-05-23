import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../share/header/header.component";
import { SliderClienteComponent } from "../share/slider-cliente/slider-cliente.component";
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BarraLateralAnuncioComponent } from "../barra-lateral-anuncio/barra-lateral-anuncio.component";

@Component({
  selector: 'app-home-cliente',
  imports: [HeaderComponent, SliderClienteComponent, RouterOutlet, ReactiveFormsModule, CommonModule, BarraLateralAnuncioComponent],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeClienteComponent implements OnInit {

  selectedFile!: File;

  previewUrl: string = 'http://localhost:8080/AppSalonBelleza-1.0-SNAPSHOT/';

  emailLogueado: string = '';
  fotoPerfil: string | null = null;
  gustoCliente: string = '';
  tipoLogin: string = '';

  constructor(private route: ActivatedRoute, public clienteServicio: ClienteServiceService, public router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tipoLogin = params['tipoLogin'];
      if (this.tipoLogin === 'login') {
        this.emailLogueado = params['emailLogueado'];
        this.obtenerCliente();
        console.log('Entro logueado')
      } else {
        this.emailLogueado = params['emailLogueado'];
        console.log('Entro registrandose')
        this.fotoPerfil = params['pathFoto'];
      }
    });
    console.log('La ruta de la foto es: ' + this.previewUrl);
    this.home();
  }

  home() {
    this.router.navigate(['/home-cliente/info-home-cliente'], {
      queryParams: { emailLogueado: this.emailLogueado, pathFoto: this.fotoPerfil }
    });
  }

  obtenerCliente(){
    this.clienteServicio.obtenerCliente(this.emailLogueado).subscribe({
      next: data => {
        this.fotoPerfil = data.pathFoto;
      },
      error: error => {
        console.error('Error al obtener el cliente: ' + error);
      }
    });
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
    formData.append('image', this.selectedFile);
    formData.append('correo', this.emailLogueado);

    this.clienteServicio.actualizarFotoPerfil(formData, 'Cliente').subscribe({
      next: data => {
        console.log('El path es: ' + data.imagePath);
        Swal.fire('Exito', 'Foto de perfil actualizada', 'success');
        this.previewUrl = data.imagePath;
        this.router.navigate(['/home-cliente'], {
          queryParams: { emailLogueado: this.emailLogueado, pathFoto: this.fotoPerfil }
        });
      },
      error: error => {
        console.error('Error al subir la imagen: ' + error)
      }
    })
  }
}