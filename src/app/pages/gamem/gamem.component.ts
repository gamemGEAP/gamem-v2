import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamem',
  templateUrl: './gamem.component.html',
  styleUrls: ['./gamem.component.scss'],
})
export class GamemComponent {
  public navFixed: boolean = true;

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
