import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PageTemplate } from '../interfaces/page-template';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private url = `${environment.api}/patient`;

  constructor(private httpClient: HttpClient) {}

  public list(pagina : number): Observable<PageTemplate<Patient>> {
    return this.httpClient.get<PageTemplate<Patient>>(`${this.url}/list/?page=${pagina}&size=10`);
  }

  public delete(id : number): Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/delete-patient/?patientId=${id}`);
  }

  public search(nome : string): Observable<PageTemplate<Patient>>{
    return this.httpClient.get<PageTemplate<Patient>>(`${this.url}/search/${nome}/?page=0&size=10`);
  }
}
