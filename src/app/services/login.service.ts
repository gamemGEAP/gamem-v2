import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginResponse } from '../interfaces/dto/login-response';
import { LoginRequest } from '../interfaces/dto/login-request';
import { EditUserRequest } from '../interfaces/dto/edit-user-request';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = `${environment.api}/user`;

  constructor(private httpClient: HttpClient) {}

  public login(login: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.url}/auth`, login);
  }

  public edit(editRequest: EditUserRequest): Observable<any> {
    return this.httpClient.put(`${this.url}/edit-profile`, editRequest);
  }
}
