import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEmpleado } from '../../../interfaces/users/user-empleado';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cita } from '../../../interfaces/cita';
import Swal from 'sweetalert2';
import { ClienteServiceService } from '../../../services/cliente/cliente-service.service';

@Component({
  selector: 'app-reservar-cita',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reservar-cita.component.html',
  styleUrl: './reservar-cita.component.css'
})

export class ReservarCitaComponent implements OnInit {

  horarioForm: FormGroup;

  private readonly fetchback = inject(ClienteServiceService);

  usersEmpleados: UserEmpleado[] = [];

  tipoServicio: string | null = null;
  emailLogueado: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    const horaInicio =
      this.horarioForm = this.fb.group({
        horaEntrada: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tipoServicio = params['tipoServicio'];
    });
    console.log(this.tipoServicio);
    console.log(this.emailLogueado);
  }

  obtenerUsuariosEmpleados() {
    const { horaEntrada } = this.horarioForm.value;
    console.log(this.horarioForm.value)
    this.fetchback.obtenerEmpleadosDisponibles(horaEntrada).subscribe({
      next: value => {
        this.usersEmpleados = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }


  guardarCita(empleado: string) {
    const { horaEntrada } = this.horarioForm.value;
    const cita: Cita = {
      hora: horaEntrada,
      empleado: empleado
    }
    console.log(cita)
    this.fetchback.crearCita(cita).subscribe({
      next: data => {
        console.log(data);
        Swal.fire('Exito!', 'Cita agendada correctamente', 'success');
        this.router.navigate(['/home-cliente']);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}