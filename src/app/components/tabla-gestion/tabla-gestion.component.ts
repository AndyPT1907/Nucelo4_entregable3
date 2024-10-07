import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { FormsModule } from '@angular/forms';
import { FormularioAggComponent } from '../../pages/formulario-agg/formulario-agg.component';

@Component({
  selector: 'app-tabla-gestion',
  standalone: true,
  imports: [FormularioAggComponent, RouterLink, FormsModule],
  templateUrl: './tabla-gestion.component.html',
  styleUrl: './tabla-gestion.component.css'
})
export class TablaGestionComponent {
  ruta = inject(Router)

  cerrarSesion(){
    //localStorage.setItem("token", 'false')
    localStorage.removeItem('login')
    this.ruta.navigateByUrl('home')
    location.reload()
  }
  servicios = inject(LibrosService)
  libros : any

  ngOnInit(){
    this.servicios.getLibro().subscribe(p=>{
      this.libros = p
    })
  }
  delete(autor: any){
      this.servicios.deleteLibro(autor).subscribe()
      alert("Libro eliminado")
      location.reload()

  }
}
