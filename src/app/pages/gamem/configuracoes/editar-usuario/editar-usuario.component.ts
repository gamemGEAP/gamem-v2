import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditUserRequest } from 'src/app/dto/edit-user-request';
import { ConfirmDialogCustom } from 'src/app/global/confirm-dialog';
import { ToastCustom } from 'src/app/global/toast-custom';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss'],
})
export class EditarUsusarioComponent {
  formModel: FormGroup;
  submetido: boolean = false;

  constructor(
    private confirmDialog: ConfirmDialogCustom,
    private router: Router,
    private loginService: LoginService,
    private toast: ToastCustom
  ) {
    this.formModel = new FormBuilder().group({
      userName: ['', Validators.required],
      key: ['', Validators.required],
    });
  }

  submit() {
    this.submetido = true;
    const data : EditUserRequest = this.formModel.value;

    if (this.formModel.valid) {
      this.loginService.edit(data).subscribe(m=>{
        this.toast.sucess('Usuário salvo com sucesso');
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
