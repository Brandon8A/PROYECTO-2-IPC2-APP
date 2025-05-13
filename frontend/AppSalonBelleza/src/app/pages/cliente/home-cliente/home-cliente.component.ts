import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../share/header/header.component";
import { SliderClienteComponent } from "../share/slider-cliente/slider-cliente.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';

@Component({
  selector: 'app-home-cliente',
  imports: [HeaderComponent, SliderClienteComponent, RouterOutlet],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeClienteComponent implements OnInit{

  selectedFile!: File;

  emailLogueado: string | null = null;
  fotoPerfil: string | null = null;

  constructor(private route: ActivatedRoute, public clienteServicio: ClienteServiceService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
      this.fotoPerfil = params['pathFoto'];
      console.log('Email Logueado: '+this.emailLogueado);
      console.log('Path foto: '+this.fotoPerfil);
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.clienteServicio.actualizarFotoPerfil(formData);
  }
}
