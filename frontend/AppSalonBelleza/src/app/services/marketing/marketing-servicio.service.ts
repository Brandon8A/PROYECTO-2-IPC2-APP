import { Injectable } from '@angular/core';
import { Anuncio } from '../../interfaces/anuncio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoAnuncio } from '../../interfaces/tipo-anuncio';
import { Fechas } from '../../interfaces/fechas';

@Injectable({
  providedIn: 'root'
})
export class MarketingServicioService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';


  constructor(private http: HttpClient) { }

  obteneAnuncios(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(`${this.API_URL}/AnunciosServlet`);
  }

  obtenerPreciosAnuncios(): Observable<TipoAnuncio[]> {
    return this.http.get<TipoAnuncio[]>(`${this.API_URL}/TipoAnuncioServlet`);
  }

  ingresarAnuncio(anuncio: FormData) {
    return this.http.post<Anuncio>(`${this.API_URL}/AnunciosServlet`, anuncio);
  }

  quitarAnuncio(datosAnuncio: Anuncio, idAnuncio: number, tipoActualizacion: string) {
    console.log('Metodo quitarAnuncio() en servicio marketing-servicio-service');
    return this.http.put<Anuncio[]>(`${this.API_URL}/AnunciosServlet?anuncio=${idAnuncio}&tipoActualizacion=${tipoActualizacion}`, datosAnuncio);
  }

  mostrarAnuncio(datosAnuncio: Anuncio, idAnuncio: number, tipoActualizacion: string) {
    console.log('Metodo quitarAnuncio() en servicio marketing-servicio-service');
    return this.http.put<Anuncio[]>(`${this.API_URL}/AnunciosServlet?anuncio=${idAnuncio}&tipoActualizacion=${tipoActualizacion}`, datosAnuncio);
  }

  obtenerAnunciosMasMostrados(tipoReporte: string): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(`${this.API_URL}/ReporteAnuncioServlet?tipoReporte=${tipoReporte}`);
  }

  obtenerAnunciosMenosMostrados(tipoReporte: string): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(`${this.API_URL}/ReporteAnuncioServlet?tipoReporte=${tipoReporte}`);
  }
  obtenerAnunciosMasMostradosPorFecha(tipoReporte: string, fechas: Fechas): Observable<Anuncio[]> {
    return this.http.post<Anuncio[]>(`${this.API_URL}/ReporteAnuncioServlet?tipoReporte=${tipoReporte}`, fechas);
  }

  obtenerAnunciosMenosMostradosPorFecha(tipoReporte: string, fechas: Fechas): Observable<Anuncio[]> {
    return this.http.post<Anuncio[]>(`${this.API_URL}/ReporteAnuncioServlet?tipoReporte=${tipoReporte}`, fechas);
  }
}
