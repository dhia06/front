import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Gamme } from '../Models/gamme';
import { User } from './user';


const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  user: User;

  constructor(  private http: HttpClient) { }
  addGamme(gamme: Gamme) {
    return this.http.post('http://localhost:3000/game/create', gamme);
  }

  addPersonne(user: User) {

    return this.http.post(API_LINK, user);
  }

    allpro(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:3000/get');   }


     /*updateUser(user: User){
        return this.http.put<User>('http://localhost:3000/${user.id}/update',JSON.stringify(user));
      }*/

      update(us:User){
        return this.http.put<User>('http://localhost:3000/'+us.id+'/'+us.email+'/update', JSON.stringify(us))
    
   }

   /*   allpro(): Observable<User[]> {
        return this.http.get('http://localhost:3000/get').pipe(
        map(response => response.data)
        );
        }
   /* allpro(): <User[]>{
      return this.http.get('http://localhost:3000/get').pipe(
      map(response => response.data)
      );
      }*/
}
