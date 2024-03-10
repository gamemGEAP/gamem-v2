import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TableCustomComponent } from 'src/app/global/components/table-custom/table-custom.component';
import { InformacoesPacienteComponent } from './informacoes-paciente/informacoes-paciente.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { BoxTratamentoComponent } from './box-tratamento/box-tratamento.component';

@NgModule({
  declarations: [
    ListarPacientesComponent,
    InformacoesPacienteComponent,
    BoxTratamentoComponent,
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    TableModule,
    PaginatorModule,
    TableCustomComponent,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
})
export class PacientesModule {}
