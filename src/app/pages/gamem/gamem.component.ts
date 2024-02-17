import { Router } from '@angular/router';
import { Component, HostListener } from '@angular/core';
import { ToastCustom } from 'src/app/global/toast-custom';
import { ConfirmDialogCustom } from 'src/app/global/confirm-dialog';

interface Item {
  icon: string;
  nome: string;
  rota: string;
}

@Component({
  selector: 'app-gamem',
  templateUrl: './gamem.component.html',
  styleUrls: ['./gamem.component.scss'],
})
export class GamemComponent {
  public navFixed: boolean = true;
  public getScreenWidth: number = window.innerWidth;
  public items: Item[] = [
    { icon: 'forms_add_on', nome: 'Formulário', rota: '/gamem/formulario' },
    { icon: 'group', nome: 'Pacientes', rota: '/gamem/pacientes' },
    { icon: 'folder_shared', nome: 'Tratamentos', rota: '/gamem/tratamentos' },
    { icon: 'badge', nome: 'Trabalhadores', rota: '/gamem/trabalhadores' },
    { icon: 'settings', nome: 'Configurações', rota: '/gamem/configuracoes' },
  ];

  constructor(
    private confirmDialog: ConfirmDialogCustom,
    private router: Router,
    private toast: ToastCustom
  ) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  logout(): void {
    this.confirmDialog
      .abrirDialog({ mensagem: 'Tem certeza que deseja sair do GAMEM?' })
      .subscribe((resp) => {
        if (resp) {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
          this.toast.info('Desconectado', 'Você saiu do GAMEM');
        }
      });
  }
}
