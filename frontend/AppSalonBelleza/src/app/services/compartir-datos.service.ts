import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompartirDatosService {

  private email = new BehaviorSubject<string>('');
  correo$ = this.email.asObservable();
  
  constructor() { }

  obtenerEmail(nombre: string) {
    this.email.next(nombre);
  }
}
