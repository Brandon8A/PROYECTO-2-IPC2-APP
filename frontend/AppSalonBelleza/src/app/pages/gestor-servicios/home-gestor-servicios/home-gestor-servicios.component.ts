import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../share/header/header.component';
import { SliderGestorServiciosComponent } from "../share/slider-gestor-servicios/slider-gestor-servicios.component";
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-gestor-servicios',
  imports: [SliderGestorServiciosComponent, RouterOutlet, HeaderComponent],
  templateUrl: './home-gestor-servicios.component.html',
  styleUrl: './home-gestor-servicios.component.css'
})
export class HomeGestorServiciosComponent implements OnInit {
  email: string = '';

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['emailLogueado'];
    });
    this.home();
    console.log("Email logueado en home-gestor-servicios: " + this.email);
  }

  home() {
    this.router.navigate(['/home-gestor-servicios/info-home-gestor-servicios'], {
      queryParams: { emailLogueado: this.email }
    });
  }
}
