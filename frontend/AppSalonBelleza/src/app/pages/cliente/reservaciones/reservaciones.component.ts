import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservacion } from '../../../interfaces/reservacion';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';

@Component({
  selector: 'app-reservaciones',
  imports: [],
  templateUrl: './reservaciones.component.html',
  styleUrl: './reservaciones.component.css'
})
export class ReservacionesComponent {
  private readonly fetchback = inject(ClienteServiceService);
  
  reservaciones: Reservacion[] = [];
  emailLogueado: string = '';

  constructor(private router: Router, public route: ActivatedRoute){}

  ngOnInit(){
     this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
      console.log('Email Logueado en reservaciones: '+this.emailLogueado);
    })
    this.obtenerReservaciones();

  }

  obtenerReservaciones(){
    this.fetchback.obtenerReservacionesCliente(this.emailLogueado).subscribe({
      next: value => {
        console.log(value);
        this.reservaciones = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
