import { Component, ElementRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-formulario-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-edit.component.html',
  styleUrl: './formulario-edit.component.css'
})
export class FormularioEditComponent {

  libro: any = {
    id: '',
    autor: '',
    titulo: '',
    anio: 0,
    portada: ''
  };

  servicio = inject(LibrosService);  // Usamos 'LibrosService'
  route = inject(Router);
  ruta = inject(ActivatedRoute);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Obtenemos el ID del libro desde la URL y lo cargamos usando 'getLibroId'
    this.ruta.params.subscribe(p => {
      const id = p['idLibros'];
      this.servicio.getLibroId(id).subscribe(libro => {
        this.libro = libro;  // Asignamos los datos del libro al modelo
      });
    });
  }

  // Método para editar el libro
  editar(formulario: any) {
    if (formulario.valid) {
      // Utilizamos el método editarLibro del servicio para enviar los cambios
      this.servicio.editarLibro(this.libro).subscribe(() => {
        this.route.navigateByUrl("Inicio");  // Redireccionamos a la página de inicio después de guardar
      });
    }
  }
}
