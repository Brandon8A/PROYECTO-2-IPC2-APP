import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCliente } from '../../interfaces/users/user-cliente';
import { Observable } from 'rxjs';
import { Servicios } from '../../interfaces/servicios';
import { Cita } from '../../interfaces/cita';
import { UserEmpleado } from '../../interfaces/users/user-empleado';
import { HistorialCliente } from '../../interfaces/historial-cliente';
import { Reservacion } from '../../interfaces/reservacion';
import { DatosCliente } from '../../interfaces/datos-cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteServiceService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';

  constructor(private http: HttpClient) { }

  crearCliente(cliente: UserCliente) {
    return this.http.post<UserCliente>(`${this.API_URL}/ClienteServlet`, cliente);
  }

  actualizarDatosCliente(datosCliente: DatosCliente, cliente: string) {
    return this.http.put<UserCliente>(`${this.API_URL}/ClienteServlet?cliente=${cliente}`, datosCliente);
  }

  obtenerServicios(): Observable<Servicios[]>{
    return this.http.get<Servicios[]>(`${this.API_URL}/ServiciosServlet`);
  }

  crearCita(cita: Cita){
    return this.http.post<Cita>(`${this.API_URL}/CitaServlet`, cita);
  }

  obtenerEmpleadosDisponibles(hora: string): Observable<UserEmpleado[]>{
    return this.http.get<UserEmpleado[]>(`${this.API_URL}/EmpleadoDisponibleServlet?hora=${hora}`);
  }

  obtenerHistorialCliente(): Observable<HistorialCliente[]>{
    return this.http.get<HistorialCliente[]>(`${this.API_URL}/HistorialClienteServlet`);
  }

  obtenerReservacionesCliente(): Observable<Reservacion[]>{
    return this.http.get<Reservacion[]>(`${this.API_URL}/ReservacionServlet`);
  }
}