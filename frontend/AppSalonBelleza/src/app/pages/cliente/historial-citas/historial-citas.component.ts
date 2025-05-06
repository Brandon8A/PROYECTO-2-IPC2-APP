import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HistorialCliente } from '../../../interfaces/historial-cliente';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';

@Component({
  selector: 'app-historial-citas',
  imports: [],
  templateUrl: './historial-citas.component.html',
  styleUrl: './historial-citas.component.css'
})
export class HistorialCitasComponent {
  private readonly fetchback = inject(ClienteServiceService);
  
  historial: HistorialCliente[] = [];

  constructor(private router: Router){}

  ngOnInit(){
    this.obtenerServicios();
  }

  obtenerServicios(){
    this.fetchback.obtenerHistorialCliente().subscribe({
      next: value => {
        console.log(value);
        this.historial = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}