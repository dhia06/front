import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicemodel } from '../../Models/Servicemodel';
import { Travailmodel } from '../../Models/Travailmodel';


@Injectable({
  providedIn: 'root'
})
export class ApitaskService {
  
  
  API_SERVER = "http://localhost:3000/travail";
  URL= "http://localhost:3000/servicess"

  constructor(private httpClient: HttpClient) { }
  public readTravaux(){

    return   this.httpClient.get<Travailmodel>(`${this.API_SERVER}`);
  

    
  }
  
  public createTravaux(travaux: Travailmodel){
    return this.httpClient.post<Travailmodel>(`${this.API_SERVER}/create`, travaux);
  }
  
  public updatetask(travaux: Travailmodel){
    return this.httpClient.put<Travailmodel>(`http://localhost:3000/travail/update/`+travaux.id, travaux);
  }
  update(id, data): Observable<any> {
    return this.httpClient.put(`${'http://localhost:3000/update'}/${id}`, data);
  }
  public deletetask(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/delete/${id}`);
  }
  deleteserv(travaux:Travailmodel){
    return this.httpClient.delete<Travailmodel>('http://localhost:3000/Servicet/'+travaux.id+'/delete');
  }

  
  


}
