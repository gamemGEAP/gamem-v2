import { ConfirmDialogCustom } from './../../../../global/confirm-dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import { PageTemplate } from 'src/app/interfaces/page-template';
import { PacienteService } from 'src/app/services/paciente.service';
import { TableCustomComponent } from 'src/app/global/components/table-custom/table-custom.component';
import { ToastCustom } from 'src/app/global/toast-custom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.scss'],
})
export class ListarPacientesComponent implements OnInit {
  listaPacientes!: PageTemplate<Patient>;
  paciente!: Patient;
  paginaAtual: number = 0;
  total = 0;

  @ViewChild('tabela') tabela!: TableCustomComponent;

  constructor(
    private pacienteService: PacienteService,
    private confirmDialog: ConfirmDialogCustom,
    private toast: ToastCustom,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pageChange(0);
  }

  pageChange(pagina: number) {
    this.pacienteService.list(pagina).subscribe((m) => {
      this.tabela.setElementos(m);
      this.paginaAtual = pagina;
    });
  }

  excluirPaciente(paciente: Patient) {
    this.confirmDialog
      .abrirDialog({
        mensagem: `${paciente.name} será excluído(a) do sistema.`,
        titulo: 'Tem certeza que deseja excluir?',
      })
      .subscribe((resp) => {
        if (resp) {
          this.pacienteService.delete(paciente.id).subscribe((m) => {
            this.toast.sucess(m.message);
            this.pageChange(this.paginaAtual);
          });
        }
      });
  }

  buscaPaciente(nomePaciente: string) {
    if (!nomePaciente) {
      this.pacienteService
        .list(0)
        .subscribe((m) => this.tabela.setElementos(m));
      return;
    }

    this.pacienteService
      .search(nomePaciente)
      .subscribe((m) => this.tabela.setElementos(m));
  }

  edicao(id: number) {
    this.router.navigate([`/gamem/pacientes/informacoes/${id}`]);
  }
}
