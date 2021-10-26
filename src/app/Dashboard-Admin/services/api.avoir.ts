import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetMaComponent } from 'src/app/Espace-Client/projet-ma/projet-ma.component';
import { Avoir } from 'src/app/Models/avoir';
import { Projet } from 'src/app/Models/Projet';
import { ProjetService } from 'src/app/nv-projet/projet.service';


@Injectable({
  providedIn: 'root'
})
export class ApiAvoir {
  static createServices(avoir: any) {
    throw new Error('Method not implemented.');
  }
  API_SERVER = "http://localhost:3000/avoir";

  constructor(private httpClient: HttpClient) { }


public readServices(){
  return this.httpClient.get<Avoir[]>(`${this.API_SERVER}`);
}

readAvoir(P:Projet){
  return this.httpClient.put<Avoir>(`http://localhost:3000/avoir/all`,P);
}


public createServices(services: Avoir){
  return this.httpClient.post<Avoir>(`${this.API_SERVER}/create`, services);
}

public updateService(services: Avoir){
  return this.httpClient.put<Avoir>(`http://localhost:3000/servicess/update/`+services.id, services);
}
update(id, data): Observable<any> {
  return this.httpClient.put(`${'http://localhost:3000/update'}/${id}`, data);
}
public deleteService(id: number){
  return this.httpClient.delete(`${this.API_SERVER}/delete/${id}`);
}
deleteserv(service:Avoir){
  return this.httpClient.delete<Avoir>('http://localhost:3000/avoir/'+service.id+'/delete');
}

getProjectById(id:number){
  return this.httpClient.get<Projet>('http://localhost:3000/projet/verify/'+id)

}


}
