import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-tabla-lib',
  standalone: true,
  imports: [],
  templateUrl: './tabla-lib.component.html',
  styleUrl: './tabla-lib.component.css'
})
export class TablaLibComponent {
  servicio = inject(LibrosService)
  libros:any

  ngOnInit(){
    this.servicio.getLibro().subscribe(a =>{
      this.libros = a
    })
  }

  delete(id: any){
    this.servicio.deleteLibro(id).subscribe()
      alert("Libro eliminado")
  }
}

