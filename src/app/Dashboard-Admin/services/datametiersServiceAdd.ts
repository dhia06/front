import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicemodel } from '../../Models/Servicemodel';





const API_LINK1 = 'http://localhost:3000/Servicet/create';



@Injectable({
  providedIn: 'root'
})
export class datametiersServiceAdd {
  constructor(  private http: HttpClient) { }

  create(servicet: Servicemodel){
    console.log(Servicemodel);
    return this.http.post(API_LINK1, Servicemodel);
  }
  
  
 
  
}