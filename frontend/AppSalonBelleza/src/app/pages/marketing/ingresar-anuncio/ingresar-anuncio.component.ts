import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketingServicioService } from '../../../services/marketing/marketing-servicio.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TipoAnuncio } from '../../../interfaces/tipo-anuncio';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-anuncio',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ingresar-anuncio.component.html',
  styleUrl: './ingresar-anuncio.component.css'
})
export class IngresarAnuncioComponent {

  formulario: FormGroup;

  opcionSeleccionada: string = '';
  emailGestorServicios: string = '';
  preciosAnuncios: TipoAnuncio[] = [];
  precioImagen: number = 0;
  precioTexto: number = 0;
  precioVideo: number = 0;
  precioAdquirido: number = 0;
  link: string = '';
  archivoSeleccionado: File | null = null;

  emailLogueado: string = '';

  constructor(public route: ActivatedRoute, public marketingServicio: MarketingServicioService, public router: Router, private fb: FormBuilder) {

    this.formulario = this.fb.group({
      descripcion: [''],
      dias: [''],
      tipoAnuncio: [''],
      textoAnuncio: [''],
      videoAnuncio: [''],
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
    });
    this.obtenerPreciosAnuncios();
    for (let i = 0; i < this.preciosAnuncios.length; i++) {
      if (this.preciosAnuncios[i].tipoAnuncio === 'imagen con texto') {
        this.precioImagen = this.preciosAnuncios[i].precio;
      } else if (this.preciosAnuncios[i].tipoAnuncio === 'texto') {
        this.precioTexto = this.preciosAnuncios[i].precio;
      } else if (this.preciosAnuncios[i].tipoAnuncio === 'video con texto') {
        this.precioVideo = this.preciosAnuncios[i].precio;
      }
    }
    console.log("Email logueado en info-home-gestor-servicio: " + this.emailLogueado);
  }

  obtenerPreciosAnuncios() {
    this.marketingServicio.obtenerPreciosAnuncios().subscribe({
      next: (response) => {
        this.preciosAnuncios = response;
        console.log("Precios de anuncios: ", this.preciosAnuncios);
      },
      error: (error) => {
        console.error("Error al obtener los precios de los anuncios: ", error);
      }
    })
  }

  onArchivoSeleccionado(event: any) {
    this.archivoSeleccionado = event.target.files[0];
  }

  ingresarAnuncio() {
    const formData = new FormData();
    var precioAdquirido = 0;

    formData.append('descripcion', this.formulario.get('descripcion')?.value);
    formData.append('dias', this.formulario.get('dias')?.value);
    formData.append('tipoAnuncio', this.formulario.get('tipoAnuncio')?.value);

    if (this.opcionSeleccionada === 'texto') {
      precioAdquirido = this.formulario.get('dias')?.value * this.precioTexto;
      formData.append('textoAnuncio', this.formulario.get('textoAnuncio')?.value);
    } else if (this.opcionSeleccionada === 'video con texto') {
      precioAdquirido = this.formulario.get('dias')?.value * this.precioVideo;
      formData.append('videoAnuncio', this.formulario.get('videoAnuncio')?.value);
    } else if (this.opcionSeleccionada === 'imagen con texto' && this.archivoSeleccionado) {
      precioAdquirido = this.formulario.get('dias')?.value * this.precioImagen;
      formData.append('imagenAnuncio', this.archivoSeleccionado);
    }
    formData.append('precioAdquirido', precioAdquirido.toString());

    this.marketingServicio.ingresarAnuncio(formData).subscribe({
      next: data => {
        console.log("Anuncio ingresado: ", data);
        Swal.fire('Exito', 'Anuncio ingresado correctamente', 'success');
        this.router.navigate(['/home-marketing'], {
          queryParams: { emailLogueado: this.emailLogueado }
        });
      }, 
      error: error => {
        console.error("Error al ingresar el anuncio: ", error);
        Swal.fire('Error', 'No se pudo ingresar el anuncio', 'error');
      }
    })
  }
}
