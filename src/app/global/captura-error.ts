import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ToastCustom } from './toast-custom';
import { HttpStatusCode } from '@angular/common/http';

@Injectable()
export class CapturaError implements ErrorHandler {
  constructor(private toast: ToastCustom, private ngZone: NgZone) {}

  handleError(error: any): void {
    const erro = error.error;

    if(!erro) return;

    switch (erro.status) {
      case HttpStatusCode.BadRequest:
        this.ngZone.run(() => {
          this.toast.error(erro.message);
        });
        break;
    }
  }
}
