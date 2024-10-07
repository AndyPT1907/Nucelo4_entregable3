import { Component } from '@angular/core';
import { TablaGestionComponent } from "../../components/tabla-gestion/tabla-gestion.component";

@Component({
  selector: 'app-gestionlibros',
  standalone: true,
  imports: [TablaGestionComponent],
  templateUrl: './gestionlibros.component.html',
  styleUrl: './gestionlibros.component.css'
})
export class GestionlibrosComponent {

}
