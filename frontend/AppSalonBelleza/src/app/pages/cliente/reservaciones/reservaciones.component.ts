import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router){}

  ngOnInit(){
    this.obtenerServicios();
  }

  obtenerServicios(){
    this.fetchback.obtenerReservacionesCliente().subscribe({
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
