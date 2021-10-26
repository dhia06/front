import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessoiresVue } from 'src/app/Models-SD/Accessoires-Vue';



@Injectable({
  providedIn: 'root'
})
export class accessoiresVueService {
  constructor(  private http: HttpClient) { }


  
  allAccessoires(): Observable<AccessoiresVue[]> {
    return this.http.get<AccessoiresVue[]>('http://localhost:3000/accessires');   }
}