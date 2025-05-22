import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anuncio } from '../../../interfaces/anuncio';
import { MarketingServicioService } from '../../../services/marketing/marketing-servicio.service';

@Component({
  selector: 'app-info-home-marketing',
  imports: [],
  templateUrl: './info-home-marketing.component.html',
  styleUrl: './info-home-marketing.component.css'
})
export class InfoHomeMarketingComponent {

  emailLogueado: string = '';
  anuncios: Anuncio[] = [];

  constructor(public route: ActivatedRoute, public router: Router, private marketingServicio: MarketingServicioService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
    });
    this.obtenerAnuncios();
    console.log("Email logueado en info-home-gestor-servicio: " + this.emailLogueado);
  }

  obtenerAnuncios() {
    this.marketingServicio.obteneAnuncios().subscribe({
      next: value => {
        console.log(value);
        this.anuncios = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ingresarAnuncio() {
    this.router.navigate(['/home-marketing/ingresar-anuncio'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }

  quitarAnuncio(id: number, anuncio: Anuncio) {
    this.marketingServicio.quitarAnuncio(anuncio, id, 'quitar').subscribe({
      next: value => {
        console.log(value);
        this.obtenerAnuncios();
        this.router.navigate(['/home-marketing/info-home-marketing'], {
          queryParams: { emailLogueado: this.emailLogueado }
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  mostrarAnuncio(id: number, anuncio: Anuncio) {
    this.marketingServicio.mostrarAnuncio(anuncio, id, 'mostrar').subscribe({
      next: value => {
        console.log('ANUNCIOS ACTUALIZADOS: ')
        console.log(value);
        this.obtenerAnuncios();
        this.router.navigate(['/home-marketing/info-home-marketing'], {
          queryParams: { emailLogueado: this.emailLogueado }
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
