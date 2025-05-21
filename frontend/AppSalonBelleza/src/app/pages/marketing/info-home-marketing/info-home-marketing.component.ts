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
    console.log("Email logueado en info-home-gestor-servicio: " + this.emailLogueado);
    this.obtenerAnuncios();
  }

  obtenerAnuncios(){
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

  ingresarAnuncio(){
    this.router.navigate(['/home-marketing/ingresar-anuncio'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }
}
