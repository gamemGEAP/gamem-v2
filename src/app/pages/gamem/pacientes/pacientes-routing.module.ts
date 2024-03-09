import { InformacoesPacienteComponent } from './informacoes-paciente/informacoes-paciente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';

const routes: Routes = [
  { path: '', component: ListarPacientesComponent },
  { path: 'informacoes/:id', component: InformacoesPacienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesRoutingModule {}
