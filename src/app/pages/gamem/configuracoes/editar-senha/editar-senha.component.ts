import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditUserRequest } from 'src/app/interfaces/dto/edit-user-request';
import { ConfirmDialogCustom } from 'src/app/global/confirm-dialog';
import { ToastCustom } from 'src/app/global/toast-custom';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-senha.component.html',
  styleUrls: ['./editar-senha.component.scss'],
})
export class EditarSenhaComponent {
  formModel: FormGroup;
  submetido: boolean = false;

  constructor(
    private confirmDialog: ConfirmDialogCustom,
    private router: Router,
    private loginService: LoginService,
    private toast: ToastCustom
  ) {
    this.formModel = new FormBuilder().group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      key: ['', Validators.required],
    });
  }

  submit() {
    this.submetido = true;
    const key = this.formModel.get('key')?.value;
    const password = this.formModel.get('password')?.value;
    const confirmPassword = this.formModel.get('confirmPassword')?.value;

    if (confirmPassword != password) {
      this.toast.error('As senhas devem ser iguais');
      return;
    }

    const data: EditUserRequest = {
      key: key,
      password: password,
    };

    if (this.formModel.valid) {
      this.loginService.edit(data).subscribe((m) => {
        this.toast.sucess('Senha salva com sucesso');
        localStorage.setItem('token', m.token);
        localStorage.setItem('user', m.username);
        this.router.navigate(['/gamem/configuracoes/']);
      });
    }
  }

  cancelar() {
    this.confirmDialog
      .abrirDialog({ mensagem: 'Deseja mesmo cancelar edição?' })
      .subscribe((m) => {
        if (m) {
          this.router.navigate(['/gamem/configuracoes/']);
        }
      });
  }
}
