import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamemRoutingModule } from './gamem-routing.module';
import { GamemComponent } from './gamem.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [GamemComponent],
  imports: [CommonModule, GamemRoutingModule, ButtonModule],
})
export class GamemModule {}
