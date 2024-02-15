import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';


@NgModule({
  declarations: [
    EditarPerfilComponent
  ],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule
  ]
})
export class ConfiguracoesModule { }
