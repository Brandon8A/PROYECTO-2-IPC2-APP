import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DescripcionEmpleado } from '../../interfaces/descripcion-empleado';
import { UserEmpleado } from '../../interfaces/users/user-empleado';
import { Observable } from 'rxjs';
import { Cita } from '../../interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicioService {

  readonly API_URL = 'http://localhost:8080/AppSalonBelleza';

  constructor(private http: HttpClient) { }

  actualizarDescripcionProfesionalEmpleado(descripcionEmpleado: DescripcionEmpleado, empleado: string) {
    return this.http.put<UserEmpleado>(`${this.API_URL}/EmpleadoServlet?empleado=${empleado}`, descripcionEmpleado);
  }

  obtenerCitas(empleado: string): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.API_URL}/CitaServlet?empleado=${empleado}`);
  }

}
