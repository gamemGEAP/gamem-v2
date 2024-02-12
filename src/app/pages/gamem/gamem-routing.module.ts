import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamemComponent } from './gamem.component';

const routes: Routes = [
  { path: '', redirectTo: 'gamem', pathMatch: 'full' },
  { path: 'gamem', component: GamemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamemRoutingModule {}
