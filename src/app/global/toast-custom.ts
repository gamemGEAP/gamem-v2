import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class ToastCustom {
  static LIFE: number = 3000;

  constructor(private messageService: MessageService) {}

  sucess(titulo?: string, mensagem?: string, tempoCustomizado?: number) {
    this.chamadaToast('success', titulo, mensagem, tempoCustomizado);
  }

  info(titulo?: string, mensagem?: string, tempoCustomizado?: number) {
    this.chamadaToast('info', titulo, mensagem, tempoCustomizado);
  }

  warn(titulo?: string, mensagem?: string, tempoCustomizado?: number) {
    this.chamadaToast('warn', titulo, mensagem, tempoCustomizado);
  }

  error(titulo?: string, mensagem?: string, tempoCustomizado?: number) {
    this.chamadaToast('error', titulo, mensagem, tempoCustomizado);
  }

  private chamadaToast(
    tipo: string,
    titulo?: string,
    mensagem?: string,
    tempoCustomizado?: number
  ) {
    this.messageService.add({
      severity: tipo,
      summary: titulo,
      detail: mensagem,
      life: tempoCustomizado ?? ToastCustom.LIFE
    });
  }
}
