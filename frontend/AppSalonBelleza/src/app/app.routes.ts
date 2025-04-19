import { Routes } from '@angular/router';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { GestionUsuariosComponent } from './pages/admin/gestion-usuarios/gestion-usuarios.component';

export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch: 'full'},
    {path: 'registro', component: RegisterUserComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home-admin', component: HomeAdminComponent,
        children:[
            {path: 'gestion-usuarios', component: GestionUsuariosComponent}
        ]
    },

    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];