import { NavDesktopComponent } from './../../global/components/nav-desktop/nav-desktop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

import { GamemRoutingModule } from './gamem-routing.module';
import { GamemComponent } from './gamem.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogCustom } from 'src/app/global/confirm-dialog';

@NgModule({
  declarations: [GamemComponent, NavDesktopComponent],
  imports: [
    CommonModule,
    GamemRoutingModule,
    ButtonModule,
    RippleModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, ConfirmDialogCustom],
})
export class GamemModule {}
