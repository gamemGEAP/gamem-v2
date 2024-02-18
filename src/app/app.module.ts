import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CapturaError } from './global/captura-error';
import { ToastCustom } from './global/toast-custom';
import { InterceptadorJwt } from './global/interceptador-jwt';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [
    MessageService,
    { provide: ErrorHandler, useClass: CapturaError },
    ToastCustom,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptadorJwt, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
