import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from '../interfaces/users/administrador';
import { LoginUser } from '../interfaces/login-user';
import { UserCliente } from '../interfaces/users/user-cliente';
import { HorarioSalon } from '../interfaces/horario-salon';
import { UserGestorServicios } from '../interfaces/users/user-gestor-servicios';
import { UserEmpleado } from '../interfaces/users/user-empleado';
import { UserMarketing } from '../interfaces/users/user-marketing';

@Injectable({
  providedIn: 'root'
})

export class RegisterServiceService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';

  constructor(private http: HttpClient) { }

  crearAdministrador(admin: Administrador) {
    return this.http.post<Administrador>(`${this.API_URL}/RegistrarAdministrador`, admin);
  }

  loguearUsuario(loginUser: LoginUser) {
    return this.http.post<LoginUser>(`${this.API_URL}/LoginServlet`, loginUser);
  }

  crearCliente(cliente: UserCliente) {
    return this.http.post<UserCliente>(`${this.API_URL}/ClienteServlet`, cliente);
  }

  crearGestorServicios(gestorServicios: UserGestorServicios) {
    return this.http.post<UserGestorServicios>(`${this.API_URL}/GestorServiciosServlet`, gestorServicios);
  }

  crearEmpleado(empleado: UserEmpleado) {
    return this.http.post<UserEmpleado>(`${this.API_URL}/EmpleadoServlet`, empleado);
  }

  crearMarketing(marketing: UserMarketing) {
    return this.http.post<UserMarketing>(`${this.API_URL}/MarketingServlet`, marketing);
  }
}