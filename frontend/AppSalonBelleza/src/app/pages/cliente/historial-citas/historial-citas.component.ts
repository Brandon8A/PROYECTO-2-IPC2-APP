import { Component, inject } from '@angular/core';
import { RegisterServiceService } from '../../../services/register-service.service';
import { Route, Router } from '@angular/router';
import { HistorialCliente } from '../../../interfaces/historial-cliente';

@Component({
  selector: 'app-historial-citas',
  imports: [],
  templateUrl: './historial-citas.component.html',
  styleUrl: './historial-citas.component.css'
})
export class HistorialCitasComponent {
  private readonly fetchback = inject(RegisterServiceService);
  
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
