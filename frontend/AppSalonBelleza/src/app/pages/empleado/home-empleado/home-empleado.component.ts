import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../share/header/header.component";
import { SliderEmpleadoComponent } from "../slider-empleado/slider-empleado.component";

@Component({
  selector: 'app-home-empleado',
  imports: [RouterOutlet, HeaderComponent, SliderEmpleadoComponent],
  templateUrl: './home-empleado.component.html',
  styleUrl: './home-empleado.component.css'
})
export class HomeEmpleadoComponent {
  emailLogueado: string = '';

  selectedFile!: File;

  fotoPerfil: string | null = null;


  constructor(public router: Router, public route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailLogueado = params['emailLogueado'];
    });
    this.home();
    console.log("Email logueado en home-empleado: "+ this.emailLogueado);
  }

   onFileSelected(event: any) {
    //this.selectedFile = event.target.files[0];
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Mostrar la imagen seleccionada
      const reader = new FileReader();
      reader.onload = e => {
        this.fotoPerfil = (e.target as FileReader).result as string;
      };
      reader.readAsDataURL(this.selectedFile);

      // Subir imagen al backend
      this.uploadImage();
    }
  }

  seleccionarArchivo(): void {
    const input = document.getElementById('fileInput') as HTMLInputElement;
    input.click();
  }

  uploadImage(): void {
      if (!this.selectedFile) return;
  
      var formData = new FormData();
      formData.append('file', this.selectedFile);
      /* this.clienteServicio.actualizarFotoPerfil(formData, this.selectedFile).subscribe({
        next: data => {
          console.log('El path es: '+ data);
          Swal.fire('Exito', 'Foto de perfil actualizada', 'success');
          this.fotoPerfil = data;
        },
        error: error => {
  
        }
      }) */
    }

  home(){
    this.router.navigate(['/home-empleado/info-home-empleado'], {
      queryParams: { emailLogueado: this.emailLogueado }
    });
  }
}
