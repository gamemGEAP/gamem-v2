import { NavDesktopComponent } from './../../global/components/nav-desktop/nav-desktop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

import { GamemRoutingModule } from './gamem-routing.module';
import { GamemComponent } from './gamem.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [GamemComponent, NavDesktopComponent],
  imports: [CommonModule, GamemRoutingModule, ButtonModule, RippleModule],
})
export class GamemModule {}
