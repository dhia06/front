import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Authentification/logginpro/login.service';
import { Rdv } from 'src/app/Models/Rdv';


@Injectable({
  providedIn: 'root'
})
export class RdvService {

  static createServices(avoir: any) {

  }
  API_SERVER = "http://localhost:3000/rdv";

  constructor(private httpClient: HttpClient) { 

}


public readServices(){
  return this.httpClient.get<Rdv[]>(`${this.API_SERVER}`);
}

public createServices(services: Rdv){
  return this.httpClient.post<Rdv>(`${this.API_SERVER}/create`, services);
}

public updateService(services: Rdv){
  return this.httpClient.put<Rdv>(`http://localhost:3000/rdv/update/`+services.id_rdv, services);
}
update(id, data): Observable<any> {
  return this.httpClient.put(`${'http://localhost:3000/update'}/${id}`, data);
}
public deleteService(id: number | string ){
  return this.httpClient.delete(`${this.API_SERVER}/delete/${id}`);
}
deleteserv(service:Rdv){
  return this.httpClient.delete<Rdv>('http://localhost:3000/rdv/'+service.id_rdv+'/delete');
}

  

}


