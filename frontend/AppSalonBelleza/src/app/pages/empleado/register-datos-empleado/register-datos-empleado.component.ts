import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoServicioService } from '../../../services/empleado/empleado-servicio.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-datos-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './register-datos-empleado.component.html',
  styleUrl: './register-datos-empleado.component.css'
})
export class RegisterDatosEmpleadoComponent {
  registerForm: FormGroup;
  descripcionProfesional: FormControl;
  emailEmpleado: string = '';

  constructor(public empleadoServicio: EmpleadoServicioService, private router: Router, private route: ActivatedRoute) {

    this.descripcionProfesional = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      descripcionProfesional: this.descripcionProfesional,
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailEmpleado = params['emailLogueado'];
    });
    console.log(this.emailEmpleado);
  }

  registerUser(){
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.empleadoServicio.actualizarDescripcionProfesionalEmpleado(this.registerForm.value, this.emailEmpleado).subscribe({
      next: data => {
        console.log("Empleado actualizado correctamente");
        this.router.navigate(['/home-empleado'], {
          queryParams: { emailLogueado: this.emailEmpleado }
        });
      }
    })
  }
}
