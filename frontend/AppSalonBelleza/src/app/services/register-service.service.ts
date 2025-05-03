import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from '../interfaces/users/administrador';
import { Observable } from 'rxjs';
import { UserMarketing } from '../interfaces/users/user-marketing';
import { UserGestorServicios } from '../interfaces/users/user-gestor-servicios';
import { UserEmpleado } from '../interfaces/users/user-empleado';
import { UserClienteAdmin } from '../interfaces/users/user-cliente-admin';
import { LoginUser } from '../interfaces/login-user';
import { Servicios } from '../interfaces/servicios';
import { Reservacion } from '../interfaces/reservacion';
import { HistorialCliente } from '../interfaces/historial-cliente';
import { Cita } from '../interfaces/cita';

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

  crearMarketing(marketing: UserMarketing){
    return this.http.post<UserMarketing>(`${this.API_URL}/ObtenerUserMarketing`, marketing);
  }

  obtenerUsuariosGestorServicios(): Observable<UserGestorServicios[]>{
    return this.http.get<UserGestorServicios[]>(`${this.API_URL}/GestorServiciosServlet`);
  }

  crearGestorServicios(gestorServicios: UserGestorServicios){
    return this.http.post<UserGestorServicios>(`${this.API_URL}/GestorServiciosServlet`, gestorServicios);
  }

  obtenerUsuariosEmpleados(): Observable<UserEmpleado[]>{
    return this.http.get<UserEmpleado[]>(`${this.API_URL}/EmpleadoServlet`);
  }

  crearEmpleado(empleado: UserEmpleado){
    return this.http.post<UserEmpleado>(`${this.API_URL}/EmpleadoServlet`, empleado);
  }

  obtenerUsuariosClientes(): Observable<UserClienteAdmin[]>{
    return this.http.get<UserClienteAdmin[]>(`${this.API_URL}/ClienteServlet`);
  }

  crearCliente(cliente: UserClienteAdmin){
    return this.http.post<UserClienteAdmin>(`${this.API_URL}/ClienteServlet`, cliente);
  }

  loguearUsuario(loginUser: LoginUser){
    return this.http.post<LoginUser>(`${this.API_URL}/LoginServlet`, loginUser);
  }

  obtenerServicios(): Observable<Servicios[]>{
    return this.http.get<Servicios[]>(`${this.API_URL}/ServiciosServlet`);
  }

  obtenerReservacionesCliente(): Observable<Reservacion[]>{
    return this.http.get<Reservacion[]>(`${this.API_URL}/ReservacionServlet`);
  }

  obtenerHistorialCliente(): Observable<HistorialCliente[]>{
    return this.http.get<HistorialCliente[]>(`${this.API_URL}/HistorialClienteServlet`);
  }

  obtenerEmpleadosDisponibles(hora: string): Observable<UserEmpleado[]>{
    return this.http.get<UserEmpleado[]>(`${this.API_URL}/EmpleadoDisponibleServlet?hora=${hora}`);
  }

  crearCita(cita: Cita){
    return this.http.post<Cita>(`${this.API_URL}/CitaServlet`, cita);
  }
  
}