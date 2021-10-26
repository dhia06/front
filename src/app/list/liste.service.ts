

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Projet } from '../Models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  projet: Projet;
  selectItemSubject = new Subject<Projet>();
  constructor(  private http: HttpClient) { }

  findById(id:number){
    return this.http.get<Projet>('http://localhost:3000/projet/verify/'+id)
  
  }
  getProjet(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/projet/select');
  }
  selectItem(projet: Projet) {
    this.selectItemSubject.next(projet);
  }
}
