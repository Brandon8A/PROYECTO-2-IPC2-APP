import { Component, inject, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../../services/register-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicios } from '../../../interfaces/servicios';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit{
  private readonly fetchback = inject(RegisterServiceService);
  emailLogueado: string | null = null;
  servicios: Servicios[] = [];

  constructor(private router: Router, public route: ActivatedRoute){}

  ngOnInit(){
    this.obtenerServicios();
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
      console.log(this.emailLogueado);
    })
  }

  obtenerServicios(){
    this.fetchback.obtenerServicios().subscribe({
      next: value => {
        console.log(value);
        this.servicios = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  reservarCita(tipoServicio: string){
    this.router.navigate(['/home-cliente/reservar-cita'], {
      queryParams: { tipoServicio, emailLogueado: this.emailLogueado }});
  }
}