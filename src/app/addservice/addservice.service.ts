import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../least/user';
import { Gamme } from '../Models/gamme';
import { Servicemodel } from '../Models/Servicemodel';



const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class AddServiceService {
   user: User;

  constructor(  private http: HttpClient) { }

//   addPersonne(user: User) {

//     return this.http.post(API_LINK, user);
//   }

  allGamme(): Observable<Gamme[]> {
    return this.http.get<Gamme[]>('http://localhost:3000/game');   }
   

    addService(serv: Servicemodel) {
        return this.http.post('http://localhost:3000/servicess/create', serv);
      }
    

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
