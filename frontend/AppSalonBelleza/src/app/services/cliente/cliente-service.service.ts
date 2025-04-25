import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCliente } from '../../interfaces/user-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';

  constructor(private http: HttpClient) { }

  crearCliente(cliente: UserCliente) {
    return this.http.post<UserCliente>(`${this.API_URL}/DatosClienteServlet`, cliente);
  }
}
