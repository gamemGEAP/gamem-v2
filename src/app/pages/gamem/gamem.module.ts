import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

import { GamemRoutingModule } from './gamem-routing.module';
import { GamemComponent } from './gamem.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogCustom } from 'src/app/global/confirm-dialog';
import { NavMobileComponent } from 'src/app/global/components/nav-mobile/nav-mobile.component';
import { NavDesktopComponent } from 'src/app/global/components/nav-desktop/nav-desktop.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [GamemComponent, NavDesktopComponent, NavMobileComponent],
  imports: [
    CommonModule,
    GamemRoutingModule,
    ButtonModule,
    RippleModule,
    ConfirmDialogModule,
    SidebarModule,
  ],
  providers: [ConfirmationService, ConfirmDialogCustom],
})
export class GamemModule {}
