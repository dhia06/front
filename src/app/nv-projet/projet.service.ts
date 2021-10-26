

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Projet } from '../Models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  selectItemSubject = new Subject<Projet>();
  prj: Projet;

  constructor(  private http: HttpClient) { }
 
  addProjet(prj: any) {
    return this.http.post('http://localhost:3000/projet/dd', prj);
  }

  addDevis(prj: any) {
    //prj.userEntityId=userEntity;
       return this.http.post('http://localhost:3000/devis/create', prj);
     }

     Fix(id:number,prj: any) {
    //prj.id=userEntity;
         return this.http.put('http://localhost:3000/projet/update/'+id, prj);
       }



  addProjetby(prj: any) {
       return this.http.post('http://localhost:3000/projet/dd', prj);
     }
  selectItem(prj: Projet) {
    this.selectItemSubject.next(prj);
  }

  AllProjet(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/projet/allprojects');
  }



}



