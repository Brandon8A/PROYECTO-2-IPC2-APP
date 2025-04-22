import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from '../interfaces/administrador';
import { Observable } from 'rxjs';
import { UserMarketing } from '../interfaces/user-marketing';
import { UserGestorServicios } from '../interfaces/user-gestor-servicios';
import { UserEmpleado } from '../interfaces/user-empleado';
import { UserCliente } from '../interfaces/user-cliente';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';

  constructor(private http: HttpClient) { }

  crearAdministrador(admin: Administrador){
    return this.http.post<Administrador>(`${this.API_URL}/RegistrarAdministrador`, admin);
  }

  obtenerUsuariosMarketing(): Observable<UserMarketing[]>{
    return this.http.get<UserMarketing[]>(`${this.API_URL}/ObtenerUserMarketing`);
  }

  obtenerUsuariosGestorServicios(): Observable<UserGestorServicios[]>{
    return this.http.get<UserGestorServicios[]>(`${this.API_URL}/GestorServiciosServlet`);
  }

  obtenerUsuariosEmpleados(): Observable<UserEmpleado[]>{
    return this.http.get<UserEmpleado[]>(`${this.API_URL}/EmpleadoServlet`);
  }

  obtenerUsuariosClientes(): Observable<UserCliente[]>{
    return this.http.get<UserCliente[]>(`${this.API_URL}/ClienteServlet`);
  }
}