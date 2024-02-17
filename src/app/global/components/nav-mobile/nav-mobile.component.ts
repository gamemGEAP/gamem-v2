import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Item {
  icon: string;
  nome: string;
  rota: string;
}

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss'],
})
export class NavMobileComponent {
  @Input() items: Item[] = [];
  @Output() logout: EventEmitter<any> = new EventEmitter();
  public sidebarVisible: boolean = false;

  onLogout(): void {
    this.logout.emit();
  }
}
