import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { FormRequest } from '../dto/form-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private url = `${environment.api}/form`;

  constructor(private httpClient: HttpClient) {}

  public criarAtendimento(
    form: FormRequest,
    patientPhone: string,
    patientYearsOld: string
  ): Observable<string> {
    return this.httpClient.post<string>(this.url, form, {
      params: {
        patientPhone,
        patientYearsOld,
      },
    });
  }
}
