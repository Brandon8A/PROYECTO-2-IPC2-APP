import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserGestorServicios } from '../interfaces/users/user-gestor-servicios';

@Injectable({
  providedIn: 'root'
})
export class UserGestorServiciosServiceService {

  constructor() { }

  gestorServiciosUpdate:UserGestorServicios | undefined;
  
}
