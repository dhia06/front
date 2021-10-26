

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/Models/Projet';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { PieceProjet } from 'src/app/Models-SD/PieceProjet';
import { AccessoiresProjet } from 'src/app/Models-SD/AccessoiresProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  API_SERVER = "http://localhost:3000/projet/select";
  prj: Projet;

  constructor(  private http: HttpClient) {
    
   }
  getToken(): String {
    return localStorage.getItem('accessToken');
  }

  addProjet(prj: any) {

    return this.http.post('http://localhost:3000/projet/create', prj) 
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user) {
          console.log("my userrr roleee "+JSON.stringify(user));
          // store user details and jwt token in local storage to keep user logged in between page refreshes
      let currentUser= localStorage.getItem('user');

      
      prj.iduser=currentUser
     } }))
    
    
    }

    findPieceProjetByProjetId(id:number){
      return this.http.get<PieceProjet[]>('http://localhost:3000/PieceProjet/get/'+id)
    }
  
    retrieveAccessoire(id:number): Observable<any> {
      return this.http.get<AccessoiresProjet>('http://localhost:3000/AccProjet/get/'+id)
    }

    retrieveAccessoiri(): Observable<any> {
      return this.http.get<AccessoiresProjet>('http://localhost:3000/AccProjet/get')
    }

  public updatetaskd(travauxd: Projet){
    return this.http.put<Projet>(`http://localhost:3000/taskd/update/`+travauxd.id, travauxd);
  }

  public readProjets(){
    return this.http.get<Projet[]>(`${this.API_SERVER}`);
  }

  public readPieceProjets(){
    return this.http.get<PieceProjet[]>('http://localhost:3000/PieceProjet')
  }


  
  public updateProjet(us: Projet){
    return this.http.put<Projet>(`http://localhost:3000/projet/update/`+us.id, Projet);
  }
  // update(id, data): Observable<any> {
  //   return this.http.put(`${'http://localhost:3000/update'}/${id}`, data);
  // }
  public deleteProjet(id: number){
    return this.http.delete(`${this.API_SERVER}/delete/${id}`);
  }



}



