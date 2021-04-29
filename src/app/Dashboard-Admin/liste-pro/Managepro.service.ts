import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class ManageproService {
  user: User;

  constructor(  private http: HttpClient) { }

  //cette fonction nous permet d'obtenir toute la liste des professionnels
    allpro(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:3000/get');   }
   //cette fonction nous permet de modifier l'utilisateur défini
     updateUser(user: User){
        return this.http.put<User>('http://localhost:3000/${user.id}/update',JSON.stringify(user));
      }
      //cette fonction nous permet de modifier l'utilisateur défini
      update(us:User){
        return this.http.put<User>('http://localhost:3000/'+us.id+'/'+us.email+'/update', JSON.stringify(us))
    
   }

}
