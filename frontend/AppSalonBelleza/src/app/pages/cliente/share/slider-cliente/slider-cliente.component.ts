import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider-cliente',
  imports: [RouterModule],
  templateUrl: './slider-cliente.component.html',
  styleUrl: './slider-cliente.component.css'
})
export class SliderClienteComponent{

  @Input({required: true}) emailLogueado!: string;

  constructor(public router: Router, public route: ActivatedRoute) {}

  public isOpen: boolean = false;

  toogleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toogle: ' + this.isOpen);
    console.log("Email logueado en slider: "+ this.emailLogueado);
  }

  servicios(){
    this.router.navigate(['/home-cliente/servicios'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }

  home(){
    this.router.navigate(['/home-cliente/info-home-cliente'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }

  reservaciones(email: string){
    this.router.navigate(['/home-cliente/reservaciones'], {
      queryParams: { emailLogueado: email }
    });
  }

  historial(){
    this.router.navigate(['/home-cliente/historial'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }
}
