import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Toast } from './toast';
import { HttpStatusCode } from '@angular/common/http';

@Injectable()
export class CapturaError implements ErrorHandler {
  constructor(private toast: Toast, private ngZone: NgZone) {}

  handleError(error: any): void {
    const erro = error.error;
    console.log('dentros');
    console.log(error);

    switch (erro.status) {
      case HttpStatusCode.BadRequest:
        this.ngZone.run(() => {
          this.toast.error(erro.message);
        });
        break;
    }
  }
}
