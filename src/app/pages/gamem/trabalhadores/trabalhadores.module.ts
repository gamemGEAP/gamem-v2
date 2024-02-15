import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabalhadoresRoutingModule } from './trabalhadores-routing.module';
import { ListarTrabalhadoresComponent } from './listar-trabalhadores/listar-trabalhadores.component';


@NgModule({
  declarations: [
    ListarTrabalhadoresComponent
  ],
  imports: [
    CommonModule,
    TrabalhadoresRoutingModule
  ]
})
export class TrabalhadoresModule { }
