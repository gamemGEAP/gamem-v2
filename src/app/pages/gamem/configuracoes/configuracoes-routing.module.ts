import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';

const routes: Routes = [
  {path:'', component: EditarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule { }
