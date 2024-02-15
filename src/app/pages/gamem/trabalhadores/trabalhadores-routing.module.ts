import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTrabalhadoresComponent } from './listar-trabalhadores/listar-trabalhadores.component';

const routes: Routes = [{ path: '', component: ListarTrabalhadoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabalhadoresRoutingModule {}
