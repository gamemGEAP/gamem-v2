import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { CriarAtendimentoComponent } from './criar-atendimento/criar-atendimento.component';


@NgModule({
  declarations: [
    CriarAtendimentoComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule
  ]
})
export class FormularioModule { }
