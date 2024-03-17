import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PageTemplate } from '../interfaces/page-template';
import { Treatment } from '../interfaces/treatment';
import { Patient } from '../interfaces/patient';

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

  public list(pagina: number): Observable<PageTemplate<Treatment>> {
    return this.httpClient.get<PageTemplate<Treatment>>(
      `${this.url}/list/?page=${pagina}&size=10`
    );
  }

  public archive(id: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.url}/finalized/?patientId=${id}&status=CANCELED`
    );
  }

  public search(nome: string): Observable<PageTemplate<Patient>> {
    return this.httpClient.get<PageTemplate<Patient>>(
      `${this.url}/search/name/${nome}/?page=0&size=10`
    );
  }
}
