import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarAtendimentoComponent } from './criar-atendimento/criar-atendimento.component';

const routes: Routes = [{ path: '', component: CriarAtendimentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioRoutingModule {}
