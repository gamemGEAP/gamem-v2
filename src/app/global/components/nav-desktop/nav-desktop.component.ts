import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Item {
  icon: string;
  rota: string;
  href: string;
}

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
})
export class NavDesktopComponent implements OnInit {
  public items: Item[] = [];
  public navFixed: boolean = true;
  @Output() newItemEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.items = [
      { icon: 'forms_add_on', rota: 'Formulário', href: '/formulario' },
      { icon: 'group', rota: 'Pacientes', href: '/pacientes' },
      { icon: 'folder_shared', rota: 'Tratamentos', href: '/tratamentos' },
      { icon: 'badge', rota: 'Trabalhadores', href: '/trabalhadores' },
      { icon: 'settings', rota: 'Configurações', href: '/configuracoes' },
    ];
  }

  toggleNav(): void {
    this.navFixed = !this.navFixed;
    this.newItemEvent.emit(this.navFixed);
  }
}
