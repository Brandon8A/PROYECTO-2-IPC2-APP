import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider-gestor-servicios',
  imports: [RouterModule],
  templateUrl: './slider-gestor-servicios.component.html',
  styleUrl: './slider-gestor-servicios.component.css'
})
export class SliderGestorServiciosComponent {

  @Input({required: true}) emailLogueado!: string;

  public isOpen: boolean = false;

  constructor(public router: Router, public route: ActivatedRoute) {}

  toogleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toogle: ' + this.isOpen);
    console.log("Email logueado en slider: "+ this.emailLogueado);
  }

  home(){
    this.router.navigate(['/home-gestor-servicios/info-home-gestor-servicios'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }

  crearServicio(){
    this.router.navigate(['/home-gestor-servicios/crear-servicio'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }
}
