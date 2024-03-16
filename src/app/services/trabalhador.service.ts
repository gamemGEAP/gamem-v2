import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PageTemplate } from '../interfaces/page-template';
import { Worker } from '../interfaces/worker';

@Injectable({
  providedIn: 'root',
})
export class TrabalhadorService {
  private url = `${environment.api}/worker`;

  constructor(private httpClient: HttpClient) {}

  public atendentes(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${this.url}/name-attendants`);
  }

  public list(pagina: number): Observable<PageTemplate<Worker>> {
    return this.httpClient.get<PageTemplate<Worker>>(
      `${this.url}/?page=${pagina}&size=10`
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/delete-worker/?id=${id}`);
  }
}
