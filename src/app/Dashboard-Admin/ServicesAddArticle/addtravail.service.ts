import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Models/user';
import { Servicemodel } from '../../Models/Servicemodel';
import { Travailmodel } from '../../Models/Travailmodel';



const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class AddTravailService {
   user: User;

  constructor(  private http: HttpClient) { }

allService(): Observable<Servicemodel[]> {
  return this.http.get<Servicemodel[]>('http://localhost:3000/servicess');   }

    addTravail(trv: any) {
        return this.http.post('http://localhost:3000/task/create', trv);
      }
}