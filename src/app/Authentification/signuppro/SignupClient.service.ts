import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gamme } from '../../Models/gamme';
import { User } from '../../Models/user';


const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class SignupClientService {
  user: User;

  constructor(  private http: HttpClient) { }
  addGamme(gamme: Gamme) {
    return this.http.post('http://localhost:3000/game/create', gamme);
  }

  addPersonne(user: User) {

    return this.http.post('http://localhost:3000/lo/create', user);
  }
//Récuperer la liste des profe
    allpro(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:3000/lo/get');   }

//changer le statut du pro de (en attente-->approuvé)
      update(us:User){
        return this.http.put<User>('http://localhost:3000/'+us.id+'/'+us.email+'/update', JSON.stringify(us))
    
   }

 
}
