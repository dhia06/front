import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicemodel } from '../../Models/Servicemodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_SERVER = "http://localhost:3000/servicess";

  constructor(private httpClient: HttpClient) { }


public readServices(){
  return this.httpClient.get<Servicemodel[]>(`${this.API_SERVER}`);
}

public createServices(services: Servicemodel){
  return this.httpClient.post<Servicemodel>(`${this.API_SERVER}/create`, services);
}

public updateService(services: Servicemodel){
  return this.httpClient.put<Servicemodel>(`http://localhost:3000/servicess/update/`+services.id, services);
}
update(id, data): Observable<any> {
  return this.httpClient.put(`${'http://localhost:3000/update'}/${id}`, data);
}
public deleteService(id: number){
  return this.httpClient.delete(`${this.API_SERVER}/delete/${id}`);
}
deleteserv(service:Servicemodel){
  return this.httpClient.delete<Servicemodel>('http://localhost:3000/servicess/'+service.id+'/delete');
}


}
