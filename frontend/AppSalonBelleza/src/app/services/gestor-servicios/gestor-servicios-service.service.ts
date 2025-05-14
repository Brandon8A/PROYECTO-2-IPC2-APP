import { Injectable } from '@angular/core';
import { UserGestorServicios } from '../../interfaces/users/user-gestor-servicios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestorServiciosServiceService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';


  constructor(private http: HttpClient) { }

  crearGestorServicios(gestorServicios: UserGestorServicios) {
    return this.http.post<UserGestorServicios>(`${this.API_URL}/GestorServiciosServlet`, gestorServicios);
  }
}
