import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestationVue } from 'src/app/Models-SD/PrestationVue';
import { Travailmodel } from '../../Models/Travailmodel';



const API_LINK1 = 'http://localhost:3000/task/create'
@Injectable({
  providedIn: 'root'
})
export class prestationVueService  {
  constructor(  private http: HttpClient) { }

  
  allPrestations(): Observable<PrestationVue[]> {
    return this.http.get<PrestationVue[]>('http://localhost:3000/prestation');   }
}