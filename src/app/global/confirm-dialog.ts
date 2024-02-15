import { ConfirmationService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface DialogConfig {
  mensagem: string;
  icone?: string;
  titulo?: string;
}

@Injectable()
export class ConfirmDialogCustom {
  constructor(private confirmService: ConfirmationService) {}

  public abrirDialog(config: DialogConfig) {
    return new Observable<boolean>((observer) => {
      this.confirmService.confirm({
        header: config.titulo ?? 'Confirmação',
        message: config.mensagem,
        icon:
          config.icone == null
            ? 'pi pi-exclamation-triangle'
            : `pi ${config.icone}`,
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        rejectButtonStyleClass: 'p-button-danger',
        acceptButtonStyleClass: 'p-button-success',
        accept: () => observer.next(true),
        reject: () => observer.next(false),
      });
    });
  }
}
