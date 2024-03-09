import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { InputTextModule } from 'primeng/inputtext';
import { EditarUsusarioComponent } from './editar-usuario/editar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarSenhaComponent } from './editar-senha/editar-senha.component';
import { PasswordModule } from 'primeng/password';
import { AlertaErroComponent } from 'src/app/global/components/alerta-erro/alerta-erro.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    EditarPerfilComponent,
    EditarUsusarioComponent,
    EditarSenhaComponent
  ],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    AlertaErroComponent,
    ButtonModule
  ]
})
export class ConfiguracoesModule { }
