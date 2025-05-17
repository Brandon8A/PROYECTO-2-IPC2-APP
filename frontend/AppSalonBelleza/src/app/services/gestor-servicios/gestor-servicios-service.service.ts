import { Injectable } from '@angular/core';
import { UserGestorServicios } from '../../interfaces/users/user-gestor-servicios';
import { HttpClient } from '@angular/common/http';
import { Servicios } from '../../interfaces/servicios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorServiciosServiceService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';


  constructor(private http: HttpClient) { }

  crearGestorServicios(gestorServicios: UserGestorServicios) {
    return this.http.post<UserGestorServicios>(`${this.API_URL}/GestorServiciosServlet`, gestorServicios);
  }

  crearServicio(servicio: Servicios, creadorServicio: string) {
    console.log(servicio)
    return this.http.post<Servicios>(`${this.API_URL}/ServiciosServlet?gestorServicios=${creadorServicio}`, servicio);
  }

  obtenerServicios(): Observable<Servicios[]> {
    return this.http.get<Servicios[]>(`${this.API_URL}/ServiciosServlet`);
  }
}