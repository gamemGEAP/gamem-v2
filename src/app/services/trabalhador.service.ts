import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TrabalhadorService {
  private url = `${environment.api}/worker`;

  constructor(private httpClient: HttpClient) {}

  public atendentes(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${this.url}/name-attendants`);
  }
}
