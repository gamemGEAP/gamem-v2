import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import { PageTemplate } from 'src/app/interfaces/page-template';
import { TratamentoService } from 'src/app/services/tratamento.service';
import { TableCustomComponent } from 'src/app/global/components/table-custom/table-custom.component';
import { ToastCustom } from 'src/app/global/toast-custom';
import { Treatment } from 'src/app/interfaces/treatment';
import { ConfirmDialogCustom } from 'src/app/global/confirm-dialog';

@Component({
  selector: 'app-listar-tratamentos',
  templateUrl: './listar-tratamentos.component.html',
  styleUrls: ['./listar-tratamentos.component.scss'],
})
export class ListarTratamentosComponent implements OnInit {
  listaTratamentos!: PageTemplate<Patient>;
  tratamento!: Treatment;
  paginaAtual: number = 0;
  total = 0;

  @ViewChild('tabela') tabela!: TableCustomComponent;

  constructor(
    private tratamentoService: TratamentoService,
    private confirmDialog: ConfirmDialogCustom,
    private toast: ToastCustom
  ) {}

  ngOnInit(): void {
    this.pageChange(0);
  }

  pageChange(pagina: number) {
    this.tratamentoService.list(pagina).subscribe((m) => {
      m.content.map((tratamento) => {
        tratamento.lastTreatment = new Date(
          tratamento.lastTreatment
        ).toLocaleDateString('pt-BR');
        return tratamento;
      });

      this.tabela.setElementos(m);
      this.paginaAtual = pagina;
    });
  }

  arquivarTratamento(tratamento: Treatment) {
    this.confirmDialog
      .abrirDialog({
        mensagem: `${tratamento.name} será arquivado(a) no sistema.`,
        titulo: 'Tem certeza que deseja arquivar?',
      })
      .subscribe((resp) => {
        if (resp) {
          this.tratamentoService.archive(tratamento.id).subscribe((m) => {
            this.toast.sucess(m.message);
            this.pageChange(this.paginaAtual);
          });
        }
      });
  }

  buscaTratamento(nomePaciente: string) {
    if (!nomePaciente) {
      this.tratamentoService
        .list(0)
        .subscribe((m) => this.tabela.setElementos(m));
      return;
    }

    this.tratamentoService
      .search(nomePaciente)
      .subscribe((m) => this.tabela.setElementos(m));
  }
}
