import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class Toast {
  static LIFE: number = 3000;

  constructor(private messageService: MessageService) {}

  sucess(titulo?: string, mensagem?: string, tempoCustomizado?: number) {
    this.messageService.add({
      severity: 'success',
      summary: titulo,
      detail: mensagem,
      life: tempoCustomizado != null ? tempoCustomizado : Toast.LIFE,
    });
  }

  info(titulo?: string, mensagem?: string, tempoCustomizado?: number) {
    this.messageService.add({
      severity: 'info',
      summary: titulo,
      detail: mensagem,
      life: tempoCustomizado != null ? tempoCustomizado : Toast.LIFE,
    });
  }

  warn(titulo?: string, mensagem?: string, tempoCustomizado?: number) {
    this.messageService.add({
      severity: 'warn',
      summary: titulo,
      detail: mensagem,
      life: tempoCustomizado != null ? tempoCustomizado : Toast.LIFE,
    });
  }

  error(titulo?: string, mensagem?: string, tempoCustomizado?: number) {
    this.messageService.add({
      severity: 'error',
      summary: titulo,
      detail: mensagem,
      life: tempoCustomizado != null ? tempoCustomizado : Toast.LIFE,
    });
  }
}
