import { Component, Input } from '@angular/core';
import { ArchivedTreatments } from 'src/app/dto/archived-treatments';

@Component({
  selector: 'box-tratamento',
  templateUrl: './box-tratamento.component.html',
  styleUrls: ['./box-tratamento.component.scss'],
})
export class BoxTratamentoComponent {
  @Input() tratamento?: ArchivedTreatments;

  static readonly CONCLUIDO = 'CONCLUDED';
  static readonly CANCELADO = 'CANCELED';

  statusTratamento() {
    switch (this.tratamento?.status) {
      case BoxTratamentoComponent.CANCELADO:
        return 'Cancelado';
      case BoxTratamentoComponent.CONCLUIDO:
        return 'Concluido';
      default:
        return '';
    }
  }

  corStatus() {
    switch (this.tratamento?.status) {
      case BoxTratamentoComponent.CANCELADO:
        return 'cancelado';
      case BoxTratamentoComponent.CONCLUIDO:
        return 'concluido';
      default:
        return '';
    }
  }
}
