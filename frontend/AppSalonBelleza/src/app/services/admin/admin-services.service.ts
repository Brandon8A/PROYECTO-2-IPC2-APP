import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserClienteAdmin } from '../../interfaces/users/user-cliente-admin';
import { UserEmpleado } from '../../interfaces/users/user-empleado';
import { UserGestorServicios } from '../../interfaces/users/user-gestor-servicios';
import { UserMarketing } from '../../interfaces/users/user-marketing';
import { Observable } from 'rxjs';
import { HorarioSalon } from '../../interfaces/horario-salon';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';

  constructor(private http: HttpClient) { }

  crearClienteAdmin(clienteAdmin: UserClienteAdmin) {
    return this.http.post<UserClienteAdmin>(`${this.API_URL}/ClienteServlet`, clienteAdmin);
  }

  crearEmpleadoAdmin(empleadoAdmin: UserEmpleado) {
    return this.http.post<UserEmpleado>(`${this.API_URL}/EmpleadoServlet`, empleadoAdmin);
  }

  crearGestorServiciosAdmin(gestorServiciosAdmin: UserGestorServicios) {
    return this.http.post<UserGestorServicios>(`${this.API_URL}/GestorServiciosServlet`, gestorServiciosAdmin);
  }

  crearMarketingAdmin(marketingAdmin: UserMarketing) {
    return this.http.post<UserMarketing>(`${this.API_URL}/ObtenerUserMarketing`, marketingAdmin);
  }

  obtenerUsuariosMarketing(): Observable<UserMarketing[]> {
    return this.http.get<UserMarketing[]>(`${this.API_URL}/ObtenerUserMarketing`);
  }

  obtenerUsuariosEmpleados(): Observable<UserEmpleado[]> {
    return this.http.get<UserEmpleado[]>(`${this.API_URL}/EmpleadoServlet`);
  }

  obtenerUsuariosClientes(): Observable<UserClienteAdmin[]> {
    return this.http.get<UserClienteAdmin[]>(`${this.API_URL}/ClienteServlet`);
  }

  obtenerUsuariosGestorServicios(): Observable<UserGestorServicios[]> {
    return this.http.get<UserGestorServicios[]>(`${this.API_URL}/GestorServiciosServlet`);
  }

  actualizarHorarioSalon(horarioSalon: HorarioSalon){
    return this.http.put<HorarioSalon>(`${this.API_URL}/HorarioSalonServlet`, horarioSalon);
  }
}