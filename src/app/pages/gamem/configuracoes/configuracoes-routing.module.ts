import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarUsusarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarSenhaComponent } from './editar-senha/editar-senha.component';

const routes: Routes = [
  {path:'', component: EditarPerfilComponent},
  {path:'usuario', component: EditarUsusarioComponent},
  {path:'senha', component: EditarSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule { }
