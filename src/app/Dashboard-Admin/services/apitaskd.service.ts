import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travaildetailleemodel } from '../../Models/Travaildetailleemodel';

@Injectable({
  providedIn: 'root'
})
export class ApitaskdService {

  API_SERVER = "http://localhost:3000/travail-detaille";
  constructor(private httpClient: HttpClient) { }
  public readTravauxd(){
    return this.httpClient.get<Travaildetailleemodel[]>(`${this.API_SERVER}`);
}
public createTravauxd(travauxd: Travaildetailleemodel){
  return this.httpClient.post<Travaildetailleemodel>(`${this.API_SERVER}/create`, travauxd);
}

public updatetaskd(travauxd: Travaildetailleemodel){
  return this.httpClient.put<Travaildetailleemodel>(`http://localhost:3000/travail-detaille/update/`+travauxd.id, travauxd);
}
update(id, data): Observable<any> {
  return this.httpClient.put(`${'http://localhost:3000/update'}/${id}`, data);
}
public deletetaskd(id: number){
  return this.httpClient.delete(`${this.API_SERVER}/delete/${id}`);
}
deleteserv(travauxd:Travaildetailleemodel){
  return this.httpClient.delete<Travaildetailleemodel>('http://localhost:3000/travail-detaille/'+travauxd.id+'/delete');
}


















}
