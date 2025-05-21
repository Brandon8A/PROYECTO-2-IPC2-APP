import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider-marketing',
  imports: [RouterModule],
  templateUrl: './slider-marketing.component.html',
  styleUrl: './slider-marketing.component.css'
})
export class SliderMarketingComponent {
@Input({required: true}) emailLogueado!: string;

  constructor(public router: Router, public route: ActivatedRoute) {}

  public isOpen: boolean = false;

  toogleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toogle: ' + this.isOpen);
    console.log("Email logueado en slider: "+ this.emailLogueado);
  }

  home(){
    this.router.navigate(['/home-empleado'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }

  generarFactura(){
    this.router.navigate(['/home-cliente/facturar'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }
}
