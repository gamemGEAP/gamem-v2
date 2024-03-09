import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TratamentosRoutingModule } from './tratamentos-routing.module';
import { ListarTratamentosComponent } from './listar-tratamentos/listar-tratamentos.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TableCustomComponent } from 'src/app/global/components/table-custom/table-custom.component';

@NgModule({
  declarations: [ListarTratamentosComponent],
  imports: [
    CommonModule,
    TratamentosRoutingModule,
    TableModule,
    PaginatorModule,
    TableCustomComponent,
  ],
})
export class TratamentosModule {}
