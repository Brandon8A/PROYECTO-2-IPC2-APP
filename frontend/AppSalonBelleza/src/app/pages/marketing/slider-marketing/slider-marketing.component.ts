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
    this.router.navigate(['/home-marketing/info-home-marketing'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }

  reportes(){
    this.router.navigate(['/home-marketing/reportes-marketing'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }
}
