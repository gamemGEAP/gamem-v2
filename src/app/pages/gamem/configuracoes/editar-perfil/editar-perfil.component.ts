import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent {
  user: string | null;

  constructor() {
    this.user = localStorage.getItem('user');
  }
}
