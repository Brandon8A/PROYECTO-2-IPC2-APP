import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketingServicioService } from '../../../services/marketing/marketing-servicio.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Anuncio } from '../../../interfaces/anuncio';

@Component({
  selector: 'app-reportes-marketing',
  imports: [ReactiveFormsModule],
  templateUrl: './reportes-marketing.component.html',
  styleUrl: './reportes-marketing.component.css'
})
export class ReportesMarketingComponent {

  formularioAnunciosMasMostradosPorFecha: FormGroup;
  formularioAnunciosMenosMostradosPorFecha: FormGroup;

  anunciosMasMostrados: Anuncio[] = [];
  anunciosMenosMostrados: Anuncio[] = [];
  anunciosMasComprados: Anuncio[] = [];

  emailLogueado: string = '';

  constructor(private fb: FormBuilder, public route: ActivatedRoute, public marketingServicio: MarketingServicioService, public router: Router) {
    this.formularioAnunciosMasMostradosPorFecha = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
    this.formularioAnunciosMenosMostradosPorFecha = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
    });
    console.log("Email logueado en info-home-gestor-servicio: " + this.emailLogueado);
    this.obtenerAnunciosMasMostrados();
    this.obtenerAnunciosMenosMostrados();
    this.obtenerAnunciosMasComprados();
  }

  obtenerAnunciosMasMostrados() {
    this.marketingServicio.obtenerAnunciosMasMostrados('anunciosMasMostrados').subscribe({
      next: value => {
        console.log(value);
        this.anunciosMasMostrados = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }
  obtenerAnunciosMenosMostrados() {
    this.marketingServicio.obtenerAnunciosMenosMostrados('anunciosMenosMostrados').subscribe({
      next: value => {
        console.log(value);
        this.anunciosMenosMostrados = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }
  obtenerAnunciosMasComprados() {
    
  }

  obtenerAnunciosMasMostradosPorFecha() {
    this.marketingServicio.obtenerAnunciosMasMostradosPorFecha('anunciosMasMostradosPorFecha', this.formularioAnunciosMasMostradosPorFecha.value).subscribe({
      next: value => {
        console.log(value);
        this.anunciosMasMostrados = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }
  obtenerAnunciosMenosMostradosPorFecha() {
    this.marketingServicio.obtenerAnunciosMenosMostradosPorFecha('anunciosMenosMostradosPorFecha', this.formularioAnunciosMasMostradosPorFecha.value).subscribe({
      next: value => {
        console.log(value);
        this.anunciosMasMostrados = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  generarReporte(tipoReporte: string){
    this.marketingServicio.generarReporteMarketing(tipoReporte).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'usuarios.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: err => {
        console.error('Error al descargar el reporte:', err);
      }
    })
  }
}