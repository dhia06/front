import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GammeVue } from 'src/app/Models-SD/GammeVue';
import { Travailmodel } from '../../Models/Travailmodel';


@Injectable({
  providedIn: 'root'
})
export class GammeVueService {
  constructor(  private http: HttpClient) { }


  allGammes(): Observable<GammeVue[]> {
    return this.http.get<GammeVue[]>('http://localhost:3000/gammess');   }
   

}