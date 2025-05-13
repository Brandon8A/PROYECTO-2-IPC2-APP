import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../share/header/header.component";
import { SliderClienteComponent } from "../share/slider-cliente/slider-cliente.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-cliente',
  imports: [HeaderComponent, SliderClienteComponent, RouterOutlet],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeClienteComponent implements OnInit{

  emailLogueado: string | null = null;
  fotoPerfil: string | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
      this.fotoPerfil = params['pathFoto'];
      console.log('Email Logueado: '+this.emailLogueado);
      console.log('Path foto: '+this.fotoPerfil);
    })
  }

  seleccionarArchivo() {
    const input = document.getElementById('fileInput') as HTMLInputElement;
    input?.click();
  }

  cambiarImagen(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onload = (e: any) => {
        //this.imagenURL = e.target.result; // Para mostrar la vista previa inmediata
        // Aquí podrías subir la imagen al backend con HttpClient
      };
      lector.readAsDataURL(archivo);
    }
  }
}
