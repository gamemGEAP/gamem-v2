import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TratamentosRoutingModule } from './tratamentos-routing.module';
import { ListarTratamentosComponent } from './listar-tratamentos/listar-tratamentos.component';


@NgModule({
  declarations: [
    ListarTratamentosComponent
  ],
  imports: [
    CommonModule,
    TratamentosRoutingModule
  ]
})
export class TratamentosModule { }
