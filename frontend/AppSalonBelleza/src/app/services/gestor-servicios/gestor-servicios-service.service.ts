import { Injectable } from '@angular/core';
import { UserGestorServicios } from '../../interfaces/users/user-gestor-servicios';
import { HttpClient } from '@angular/common/http';
import { Servicios } from '../../interfaces/servicios';
import { Observable } from 'rxjs';
import { Fechas } from '../../interfaces/fechas';

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

  editarServicio(datosServicio: Servicios, servicio: string, tipoActualizacion: string) {
    console.log('Metodo editarServicio() en servicio gestor-servicios-service');
    return this.http.put<Servicios>(`${this.API_URL}/ServiciosServlet?servicio=${servicio}&tipoDeActualizacion=${tipoActualizacion}`, datosServicio);
  }

  mostrarServicio(datosServicio: Servicios, nombreServicio: string, tipoActualizacion: string){
    console.log('Metodo mostrarServicio() en servicio gestor-servicios-service');
    return this.http.put<Servicios>(`${this.API_URL}/ServiciosServlet?servicio=${nombreServicio}&tipoDeActualizacion=${tipoActualizacion}`, datosServicio);
  }

  ocultarServicio(datosServicio: Servicios, nombreServicio: string, tipoActualizacion: string){
    console.log('Metodo ocultarServicio() en servicio gestor-servicios-service');
    return this.http.put<Servicios>(`${this.API_URL}/ServiciosServlet?servicio=${nombreServicio}&tipoDeActualizacion=${tipoActualizacion}`, datosServicio);
  }

  obtenerServicioQueGeneraMasIngreso(tipoReporte:string): Observable<Servicios[]>{
    return this.http.get<Servicios[]>(`${this.API_URL}/ReportesServiciosServlet?tipoReporte=${tipoReporte}`);
  }

  obtenerServiciosMasReservados(tipoReporte: string): Observable<Servicios[]>{
    return this.http.get<Servicios[]>(`${this.API_URL}/ReportesServiciosServlet?tipoReporte=${tipoReporte}`);
  }

  obtenerServiciosMenosReservados(tipoReporte: string): Observable<Servicios[]>{
    return this.http.get<Servicios[]>(`${this.API_URL}/ReportesServiciosServlet?tipoReporte=${tipoReporte}`);
  }

  obtenerServiciosMasReservadosPorFecha(tipoReporte: string, fechas: Fechas): Observable<Servicios[]>{
    return this.http.post<Servicios[]>(`${this.API_URL}/ReportesServiciosServlet?tipoReporte=${tipoReporte}`, fechas);
  }

  obtenerServiciosMenosReservadosPorFecha(tipoReporte: string, fechas: Fechas): Observable<Servicios[]>{
    return this.http.post<Servicios[]>(`${this.API_URL}/ReportesServiciosServlet?tipoReporte=${tipoReporte}`, fechas);
  }
}