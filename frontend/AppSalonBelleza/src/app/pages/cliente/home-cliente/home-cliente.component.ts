import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../share/header/header.component";
import { SliderClienteComponent } from "../share/slider-cliente/slider-cliente.component";
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-cliente',
  imports: [HeaderComponent, SliderClienteComponent, RouterOutlet],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeClienteComponent implements OnInit{

  emailLogueado: string | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
      console.log('Email Logueado: '+this.emailLogueado);
    })
  }
}
