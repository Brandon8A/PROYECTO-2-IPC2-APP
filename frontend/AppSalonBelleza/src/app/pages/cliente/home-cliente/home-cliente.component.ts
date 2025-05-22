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

  selectedFile!: File;

  emailLogueado: string = '';
  fotoPerfil: string | null = null;

  

  constructor(private route: ActivatedRoute, public clienteServicio: ClienteServiceService, public router: Router){
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
      this.fotoPerfil = params['pathFoto'];
      console.log('Email Logueado: '+this.emailLogueado);
      console.log('Path foto: '+this.fotoPerfil);
    });
    this.home();
  }

  home(){
    this.router.navigate(['/home-cliente/info-home-cliente'], {
      queryParams: { emailLogueado: this.emailLogueado }
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
}