import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Models/user';
import { Gamme } from '../../Models/gamme';



const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class AddServiceService {
   user: User;

  constructor(  private http: HttpClient) { }

  allGamme(): Observable<Gamme[]> {
    return this.http.get<Gamme[]>('http://localhost:3000/game');   }
   

   addService(serv: any) {
        return this.http.post('http://localhost:3000/servicess/create', serv);
      }

}
