import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TratamentoService {
  private url = `${environment.api}/treatment`;

  constructor(private httpClient: HttpClient) {}

  public motivos(nome: string): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${this.url}/reasons-treatment`, {
      params: {
        patientName: nome,
      },
    });
  }

  public buscaNomesPacientes(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${this.url}/list-names-in-treatment`
    );
  }
}
