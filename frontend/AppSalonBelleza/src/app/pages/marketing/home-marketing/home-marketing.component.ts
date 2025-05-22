import { Component } from '@angular/core';
import { SliderMarketingComponent } from "../slider-marketing/slider-marketing.component";
import { HeaderComponent } from "../../share/header/header.component";
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-marketing',
  imports: [SliderMarketingComponent, HeaderComponent, RouterOutlet],
  templateUrl: './home-marketing.component.html',
  styleUrl: './home-marketing.component.css'
})
export class HomeMarketingComponent {
  email: string = "";

  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['emailLogueado'];
    })
    this.home();
    console.log('Email Logueado: ' + this.email);
  }

  home() {
    this.router.navigate(['/home-marketing/info-home-marketing'], {
      queryParams: { emailLogueado: this.email }
    });
  }
}
