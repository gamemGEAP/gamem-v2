import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';


@NgModule({
  declarations: [
    ListarPacientesComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
