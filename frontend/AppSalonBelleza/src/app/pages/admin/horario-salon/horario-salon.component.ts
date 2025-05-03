import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterServiceService } from '../../../services/register-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-horario-salon',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './horario-salon.component.html',
  styleUrl: './horario-salon.component.css'
})
export class HorarioSalonComponent {

  horarioForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.horarioForm = this.fb.group({
      horaEntrada: ['', Validators.required],
      horaSalida: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.horarioForm.valid) {
      const { horaEntrada, horaSalida } = this.horarioForm.value;
      console.log('Hora de entrada:', horaEntrada);
      console.log('Hora de salida:', horaSalida);
      console.log(this.horarioForm.value)
      Swal.fire('Exito!', 'Horario actualizado', 'success');
      this.router.navigate(['/home-admin']);
    } else {
      console.log('Formulario inválido');
    }
  }
}
