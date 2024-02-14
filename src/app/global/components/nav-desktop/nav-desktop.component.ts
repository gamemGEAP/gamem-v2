import { Component, Output, EventEmitter } from '@angular/core';

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

  toggleNav(): void {
    this.navFixed = !this.navFixed;
    this.newItemEvent.emit(this.navFixed);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
