import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabalhadoresRoutingModule } from './trabalhadores-routing.module';
import { ListarTrabalhadoresComponent } from './listar-trabalhadores/listar-trabalhadores.component';
import { TableCustomComponent } from 'src/app/global/components/table-custom/table-custom.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ListarTrabalhadoresComponent],
  imports: [
    CommonModule,
    TrabalhadoresRoutingModule,
    TableModule,
    PaginatorModule,
    TableCustomComponent,
  ],
})
export class TrabalhadoresModule {}
