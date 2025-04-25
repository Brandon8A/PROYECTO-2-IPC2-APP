import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from '../interfaces/administrador';
import { Observable } from 'rxjs';
import { UserMarketing } from '../interfaces/user-marketing';
import { UserGestorServicios } from '../interfaces/user-gestor-servicios';
import { UserEmpleado } from '../interfaces/user-empleado';
import { UserClienteAdmin } from '../interfaces/user-cliente-admin';
import { LoginUser } from '../interfaces/login-user';

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
}