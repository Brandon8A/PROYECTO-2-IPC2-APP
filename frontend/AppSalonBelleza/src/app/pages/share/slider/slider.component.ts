import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  constructor(public router: Router){

  }

  gestionarUsuarios() {
    this.router.navigate(['/home']);
  }

  public isOpen: boolean = false;

  toogleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toogle: ' + this.isOpen);
  }
}