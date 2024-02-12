import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'alerta-erro',
  template: `<span class="p-error">{{ mensagem() }}</span>`,
})
export class AlertaErroComponent {
  @Input() controle: AbstractControl | null = null;
  @Input() submetido: boolean = false;

  private readonly retornoErro = {
    required: 'Campo obrigatório',
  };

  mensagem(): string {
    if (!this.submetido) return '';

    const erro = this.controle?.errors;

    if (erro?.['required']) {
      return this.retornoErro.required;
    }

    return '';
  }
}
