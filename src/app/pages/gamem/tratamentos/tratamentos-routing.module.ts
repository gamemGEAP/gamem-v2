import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTratamentosComponent } from './listar-tratamentos/listar-tratamentos.component';

const routes: Routes = [{ path: '', component: ListarTratamentosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratamentosRoutingModule {}
