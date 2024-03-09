import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginService } from 'src/app/services/login.service';
import { PasswordModule } from 'primeng/password';
import { AlertaErroComponent } from 'src/app/global/components/alerta-erro/alerta-erro.component';
import { Router } from '@angular/router';
import { ToastCustom } from 'src/app/global/toast-custom';
import { tokenExpirado } from 'src/app/global/auth.guard';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    AlertaErroComponent,
  ],
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  submetido: boolean = false;
  desabilitaBotao: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toast: ToastCustom,
    private router: Router
  ) {
    this.formModel = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.verificaToken();
  }

  submit() {
    this.submetido = true;
    if (this.formModel.valid) {
      this.loginService.login(this.formModel.value).subscribe((login) => {
        this.desabilitaBotao = true;
        localStorage.setItem('token', login.token);
        localStorage.setItem('user', login.username);
        this.router.navigate(['/gamem']);
        this.toast.sucess('Logado com sucesso', 'Bem vindo ao Gamem');
      });
    }
  }

  verificaToken(){
    const token = localStorage.getItem('token');

    if(token && !tokenExpirado(token)){
      this.router.navigate(['/gamem']);
    }
  }
}
