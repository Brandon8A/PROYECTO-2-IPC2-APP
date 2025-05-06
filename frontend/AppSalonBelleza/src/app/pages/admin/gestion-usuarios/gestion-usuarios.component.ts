import { Component, inject } from '@angular/core';
import { UserMarketing } from '../../../interfaces/users/user-marketing';
import { Router } from '@angular/router';
import { UserMarketingServiceService } from '../../../services/user-marketing-service.service';
import { UserGestorServicios } from '../../../interfaces/users/user-gestor-servicios';
import { UserEmpleado } from '../../../interfaces/users/user-empleado';
import { UserClienteAdmin } from '../../../interfaces/users/user-cliente-admin';
import { AdminServicesService } from '../../../services/admin/admin-services.service';

@Component({
  selector: 'app-gestion-usuarios',
  imports: [],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent {

  private readonly fetchback = inject(AdminServicesService);
  private readonly marketingService = inject(UserMarketingServiceService);
  
  usersMarketing: UserMarketing[] = [];
  usersGestorServicios: UserGestorServicios[] = [];
  usersEmpleados: UserEmpleado[] = [];
  usersClientes: UserClienteAdmin[] = [];

  constructor(private router: Router){}

  ngOnInit(){
    this.obtenerUsuariosMarketing();
    this.obtenerUsuariosGestorServicios();
    this.obtenerUsuariosEmpleados();
    this.obtenerUsuariosClientes();
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

  crearUsuarioMarketingAdmin(){
    this.router.navigate(['home-admin/gestion-usuarios/crear-marketing-admin']);
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

  crearUsuarioGestorServiciosAdmin(){
    this.router.navigate(['home-admin/gestion-usuarios/crear-gestor-servicios-admin']);
  }

  obtenerUsuariosEmpleados(){
    this.fetchback.obtenerUsuariosEmpleados().subscribe({
      next: value => {
        this.usersEmpleados = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  crearUsuarioEmpleadoAdmin(){
    this.router.navigate(['home-admin/gestion-usuarios/crear-empleado-admin']);
  }

  obtenerUsuariosClientes(){
    this.fetchback.obtenerUsuariosClientes().subscribe({
      next: value => {
        console.log(value);
        this.usersClientes = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  crearUsuarioClienteAdmin(){
    this.router.navigate(['home-admin/gestion-usuarios/crear-cliente-admin']);
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