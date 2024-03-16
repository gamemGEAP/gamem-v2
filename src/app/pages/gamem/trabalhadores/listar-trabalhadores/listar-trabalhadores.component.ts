import { Component, OnInit, ViewChild } from '@angular/core';
import { TableCustomComponent } from 'src/app/global/components/table-custom/table-custom.component';
import { ConfirmDialogCustom } from 'src/app/global/confirm-dialog';
import { ToastCustom } from 'src/app/global/toast-custom';
import { PageTemplate } from 'src/app/interfaces/page-template';
import { Worker } from 'src/app/interfaces/worker';
import { TrabalhadorService } from 'src/app/services/trabalhador.service';

@Component({
  selector: 'app-listar-trabalhadores',
  templateUrl: './listar-trabalhadores.component.html',
  styleUrls: ['./listar-trabalhadores.component.scss'],
})
export class ListarTrabalhadoresComponent implements OnInit {
  listaTrabalhadores!: PageTemplate<Worker>;
  trabalhador!: Worker;
  paginaAtual: number = 0;
  total = 0;

  @ViewChild('tabela') tabela!: TableCustomComponent;

  constructor(
    private trabalhadorService: TrabalhadorService,
    private confirmDialog: ConfirmDialogCustom,
    private toast: ToastCustom
  ) {}

  ngOnInit(): void {
    this.pageChange(0);
  }

  pageChange(pagina: number) {
    this.trabalhadorService.list(pagina).subscribe((m) => {
      const obj: any = m;
      obj.content.map((trabalhador: any) => {
        trabalhador.function = trabalhador.function
          .map((f: any) => {
            return f.name;
          })
          .reduce(
            (accumulator: any, currentValue: any) =>
              accumulator + ' ' + currentValue
          );
        return trabalhador;
      });
      this.tabela.setElementos(obj);
      this.paginaAtual = pagina;
    });
  }

  excluirTrabalhador(trabalhador: Worker) {
    this.confirmDialog
      .abrirDialog({
        mensagem: `${trabalhador.name} será excluído(a) do sistema.`,
        titulo: 'Tem certeza que deseja excluir?',
      })
      .subscribe((resp) => {
        if (resp) {
          this.trabalhadorService.delete(trabalhador.id).subscribe((m) => {
            this.toast.sucess(m.message);
            this.pageChange(this.paginaAtual);
          });
        }
      });
  }
}
