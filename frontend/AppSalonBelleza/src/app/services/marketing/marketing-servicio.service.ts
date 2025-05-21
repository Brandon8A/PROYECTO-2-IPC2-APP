import { Injectable } from '@angular/core';
import { Anuncio } from '../../interfaces/anuncio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoAnuncio } from '../../interfaces/tipo-anuncio';

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
}
