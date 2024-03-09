import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { CriarAtendimentoComponent } from './criar-atendimento/criar-atendimento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AlertaErroComponent } from 'src/app/global/components/alerta-erro/alerta-erro.component';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [CriarAtendimentoComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    AlertaErroComponent,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputMaskModule,
    ButtonModule,
    InputNumberModule,
  ],
})
export class FormularioModule {}
