import { Routes } from '@angular/router';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { GestionUsuariosComponent } from './pages/admin/gestion-usuarios/gestion-usuarios.component';
import { CrearUsuarioMarketingComponent } from './pages/admin/gestion-usuarios/crear-usuario-marketing/crear-usuario-marketing.component';
import { CrearUsuarioGestorServiciosComponent } from './pages/admin/gestion-usuarios/crear-usuario-gestor-servicios/crear-usuario-gestor-servicios.component';
import { CrearUsuarioEmpleadoComponent } from './pages/admin/gestion-usuarios/crear-usuario-empleado/crear-usuario-empleado.component';
import { CrearUsuarioClienteComponent } from './pages/admin/gestion-usuarios/crear-usuario-cliente/crear-usuario-cliente.component';
import { RegisterDatosClienteComponent } from './pages/cliente/register-datos-cliente/register-datos-cliente.component';
import { HorarioSalonComponent } from './pages/admin/horario-salon/horario-salon.component';
import { ReportesAdminComponent } from './pages/admin/reportes-admin/reportes-admin.component';
import { HomeClienteComponent } from './pages/cliente/home-cliente/home-cliente.component';
import { ServiciosComponent } from './pages/cliente/servicios/servicios.component';
import { HistorialCitasComponent } from './pages/cliente/historial-citas/historial-citas.component';
import { ReservacionesComponent } from './pages/cliente/reservaciones/reservaciones.component';
import { ReservarCitaComponent } from './pages/cliente/reservar-cita/reservar-cita.component';
import { HomeGestorServiciosComponent } from './pages/gestor-servicios/home-gestor-servicios/home-gestor-servicios.component';
import { CrearServicioComponent } from './pages/gestor-servicios/crear-servicio/crear-servicio.component';
import { InfoHomeGestorServicioComponent } from './pages/gestor-servicios/info-home-gestor-servicio/info-home-gestor-servicio.component';
import { EditarServicioComponent } from './pages/gestor-servicios/editar-servicio/editar-servicio.component';
import { ReportesGestorServiciosComponent } from './pages/gestor-servicios/reportes-gestor-servicios/reportes-gestor-servicios.component';

export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch: 'full'},
    {path: 'registro', component: RegisterUserComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro-datos-cliente', component: RegisterDatosClienteComponent},
    {path: 'home-admin', component: HomeAdminComponent,
        children:[
            {path: 'gestion-usuarios', component: GestionUsuariosComponent},
            {path: 'gestion-usuarios/crear-marketing-admin', component: CrearUsuarioMarketingComponent},
            {path: 'gestion-usuarios/crear-gestor-servicios-admin', component: CrearUsuarioGestorServiciosComponent},
            {path: 'gestion-usuarios/crear-empleado-admin', component: CrearUsuarioEmpleadoComponent},
            {path: 'gestion-usuarios/crear-cliente-admin', component: CrearUsuarioClienteComponent},
            {path: 'horario-salon', component: HorarioSalonComponent},
            {path: 'reportes', component: ReportesAdminComponent}
        ]
    },
    {path: 'home-cliente', component: HomeClienteComponent,
        children:[
            {path: 'servicios', component: ServiciosComponent},
            {path: 'reservaciones', component: ReservacionesComponent},
            {path: 'historial', component: HistorialCitasComponent},
            {path: 'reservar-cita', component: ReservarCitaComponent}
        ]
    },
    {path: 'home-gestor-servicios', component: HomeGestorServiciosComponent,
        children:[
            {path: 'crear-servicio', component: CrearServicioComponent},
            {path: 'info-home-gestor-servicios', component: InfoHomeGestorServicioComponent},
            {path: 'editar-servicio', component: EditarServicioComponent},
            {path: 'reportes-gestor-servicios', component: ReportesGestorServiciosComponent}
        ]
    },

    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];