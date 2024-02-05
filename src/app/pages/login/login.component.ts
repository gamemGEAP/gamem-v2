import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginService } from 'src/app/services/login.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
})
export class LoginComponent {

  formModel : FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService : LoginService){
    this.formModel = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit(){
    this.loginService.login(this.formModel.value).subscribe(m=>console.log(m));
  }

  teste(){
    console.log('teste')
  }
}
