import { Component, inject } from '@angular/core';
import { RegisterServiceService } from '../../../services/register-service.service';
import { UserMarketing } from '../../../interfaces/user-marketing';

@Component({
  selector: 'app-gestion-usuarios',
  imports: [],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent {

  private readonly fetchback = inject(RegisterServiceService);
  
  usersMarketing: UserMarketing[] = [];

  ngOnInit(){
    this.obtenerUsuariosMarketing();
  }

  obtenerUsuariosMarketing(){
    this.fetchback.obtenerUsuariosMarketing().subscribe({
      next: value => {
        this.usersMarketing = value;
      },
      error: err => {
        //TODO: manejar error
        console.log(err);
      }
    })
  }
}