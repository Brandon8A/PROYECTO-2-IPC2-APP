import { Component, inject } from '@angular/core';
import { RegisterServiceService } from '../../../services/register-service.service';
import { UserMarketing } from '../../../interfaces/user-marketing';
import { Router } from '@angular/router';
import { UserMarketingServiceService } from '../../../services/user-marketing-service.service';
import { UserGestorServicios } from '../../../interfaces/user-gestor-servicios';
import { UserEmpleado } from '../../../interfaces/user-empleado';
import { UserCliente } from '../../../interfaces/user-cliente';

@Component({
  selector: 'app-gestion-usuarios',
  imports: [],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent {

  private readonly fetchback = inject(RegisterServiceService);
  private readonly marketingService = inject(UserMarketingServiceService);
  
  usersMarketing: UserMarketing[] = [];
  usersGestorServicios: UserGestorServicios[] = [];
  usersEmpleados: UserEmpleado[] = [];
  usersClientes: UserCliente[] = [];

  constructor(private router: Router){}

  ngOnInit(){
    this.obtenerUsuariosMarketing();
    this.obtenerUsuariosGestorServicios();
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

  obtenerUsuariosGestorServicios(){
    this.fetchback.obtenerUsuariosGestorServicios().subscribe({
      next: value => {
        this.usersGestorServicios = value;
      },
      error: err => {
        //TODO: manejar error
        console.log(err);
      }
    })
  }

  obtenerUsuariosEmpleados(){
    this.fetchback.obtenerUsuariosClientes().subscribe({
      next: value => {
        this.usersClientes = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }





  editarUsuario(usuario: String, userMarketing: any){
    if (usuario === 'MARKETING') {
      console.log('Editar usuario Marketing');
      console.log(userMarketing);
      this.marketingService.marketinUpdate = userMarketing;
      this.router.navigate(['home-admin/gestion-usuarios/editar-usuario/editar-gestor-marketing'])
    }
  }
}