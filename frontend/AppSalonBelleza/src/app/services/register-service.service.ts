import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from '../interfaces/administrador';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';

  constructor(private http: HttpClient) { }

  crearAdministrador(admin: Administrador){
    return this.http.post<Administrador>(`${this.API_URL}/RegistrarAdministrador`, admin);
  }
} 