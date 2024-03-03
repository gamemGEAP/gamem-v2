import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TableCustomComponent } from 'src/app/global/components/table-custom/table-custom.component';

@NgModule({
  declarations: [ListarPacientesComponent],
  imports: [CommonModule, PacientesRoutingModule, TableModule, PaginatorModule, TableCustomComponent],
})
export class PacientesModule {}
