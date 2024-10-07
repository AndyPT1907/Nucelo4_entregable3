import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-formulario-agg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-agg.component.html',
  styleUrl: './formulario-agg.component.css'
})
export class FormularioAggComponent {
  id: string = '';
  autor: string = '';
  libro: string = '';
  anioPublicacion: number = new Date().getFullYear();
  portada: string = '';

  servicio = inject(LibrosService);
  route = inject(Router);

  guardar(formulario: any) {
    if (formulario.valid) {

      const nuevoLibro = {
        id: this.id,
        autor: this.autor,
        libro: this.libro,
        anioPublicacion: this.anioPublicacion,
        portada: this.portada
      };

      /*this.servicio.postLibro(nuevoLibro).subscribe(() => {
        this.route.navigateByUrl("Inicio");
      });*/
    }
  }
}
