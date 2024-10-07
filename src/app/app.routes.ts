import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { RecomendadosComponent } from './pages/recomendados/recomendados.component';
import { FormularioEditComponent } from './pages/formulario-edit/formulario-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { GestionlibrosComponent } from './pages/gestionlibros/gestionlibros.component';
import { Error404Component } from './components/error404/error404.component';
import { rol2Guard } from './guards/login.guard';

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'recomendados', component: RecomendadosComponent},
  {path: 'editar/:idLibro', component: FormularioEditComponent, canActivate:[rol2Guard]},
  {path: 'login', component: LoginComponent},
  {path: 'gestion', component: GestionlibrosComponent, canActivate:[rol2Guard]},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];
