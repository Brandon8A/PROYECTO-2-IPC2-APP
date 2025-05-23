import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnuncioServicioService } from '../../../services/anuncio-servicio.service';

@Component({
  selector: 'app-barra-lateral-anuncio',
  imports: [RouterModule],
  templateUrl: './barra-lateral-anuncio.component.html',
  styleUrl: './barra-lateral-anuncio.component.css'
})
export class BarraLateralAnuncioComponent implements OnInit {
  tipoAnuncio: string = '';
  @Input({required: true}) emailLogueado!: string;

  constructor(public anuncioServicio: AnuncioServicioService){

  }

  ngOnInit(){
    this.obtenerAnuncio();
    if (this.tipoAnuncio === 'texto') {
      console.log('El tipo de anuncio es texto');
    } else if (this.tipoAnuncio === 'imagen con texto') {
      console.log('El tipo de anuncio es imagen con texto');
    } else {
      console.log('El tipo de anuncio es el link de un video');
    }
  }


  obtenerAnuncio(){
    this.anuncioServicio.obtenerAnuncio(this.emailLogueado).subscribe({
      next: (data) => {
        this.tipoAnuncio = data.tipoAnuncio;
      },
      error: (error) => {
        console.error('Error al obtener el anuncio:', error);
      }
    })
  }
}
