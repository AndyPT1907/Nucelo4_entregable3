import { Component } from '@angular/core';
import { TablaLibComponent } from "../../components/tabla-lib/tabla-lib.component";

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [TablaLibComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

}
