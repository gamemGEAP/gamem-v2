import { Router } from '@angular/router';
import { ConfirmDialogCustom } from './../../confirm-dialog';
import { Component, Output, EventEmitter } from '@angular/core';
import { Toast } from '../../toast';

interface Item {
  icon: string;
  nome: string;
  rota: string;
}

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
})
export class NavDesktopComponent {
  @Output() newItemEvent = new EventEmitter<boolean>();
  public navFixed: boolean = true;
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
    private toast: Toast
  ) {}

  toggleNav(): void {
    this.navFixed = !this.navFixed;
    this.newItemEvent.emit(this.navFixed);
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
