import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anuncio } from '../interfaces/anuncio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioServicioService {
  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';

  constructor(private http: HttpClient) { }

  obtenerAnuncio(cliente: string): Observable<Anuncio> {
    return this.http.get<Anuncio>(`${this.API_URL}/MostrarAnuncioServlet?cliente=${cliente}`);
  }
}
