import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypesVue } from 'src/app/Models-SD/TypesVue';
import { Travailmodel } from '../../Models/Travailmodel';

@Injectable({
  providedIn: 'root'
})
export class TypesVueService {
  constructor(  private http: HttpClient) { }

  allTypes(nom: string){
    return this.http.get<TypesVue[]>('http://localhost:3000/gammess/see/'+nom);   }

  
  allTypes2(){
    return this.http.get<TypesVue[]>('http://localhost:3000/gammess/see2/'); 
    }
    allTypes3(){
    return this.http.get<TypesVue[]>('http://localhost:3000/types'); 
    }
}