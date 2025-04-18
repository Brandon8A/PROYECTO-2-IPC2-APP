import { Component } from '@angular/core';
import { HeaderComponent } from '../../share/header/header.component';
import { SliderComponent } from "../../share/slider/slider.component";

@Component({
  selector: 'app-home-admin',
  imports: [HeaderComponent, SliderComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

}