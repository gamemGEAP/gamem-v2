import { Component, Output, EventEmitter, Input } from '@angular/core';

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
  @Input() items: Item[] = [];
  @Output() logout: EventEmitter<any> = new EventEmitter();
  @Output() newItemEvent: EventEmitter<boolean> = new EventEmitter();
  public navFixed: boolean = true;

  toggleNav(): void {
    this.navFixed = !this.navFixed;
    this.newItemEvent.emit(this.navFixed);
  }

  onLogout(): void {
    this.logout.emit();
  }
}
