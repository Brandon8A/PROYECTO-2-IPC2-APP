import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider-empleado',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './slider-empleado.component.html',
  styleUrl: './slider-empleado.component.css'
})
export class SliderEmpleadoComponent {
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