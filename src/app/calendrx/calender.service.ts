import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Disponibilite } from '../Models/Disponibilite';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  static createServices(avoir: any) {

  }
  API_SERVER = "http://localhost:3000/disponibilte";

  constructor(private httpClient: HttpClient) { }


public readServices(){
  return this.httpClient.get<Disponibilite[]>(`${this.API_SERVER}`);
}

public createServices(services: Disponibilite){
  return this.httpClient.post<Disponibilite>(`${this.API_SERVER}/create`, services);
}

public updateService(services: Disponibilite){
  return this.httpClient.put<Disponibilite>(`http://localhost:3000/disponibilte/update/`+services.id, services);
}
update(id, data): Observable<any> {
  return this.httpClient.put(`${'http://localhost:3000/update'}/${id}`, data);
}
public deleteService(id: number | string ){
  return this.httpClient.delete(`${this.API_SERVER}/delete/${id}`);
}
deleteserv(service:Disponibilite){
  return this.httpClient.delete<Disponibilite>('http://localhost:3000/disponibilte/'+service.id+'/delete');
}


}
