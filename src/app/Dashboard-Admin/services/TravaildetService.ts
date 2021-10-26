import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Travaildetailleemodel } from '../../Models/Travaildetailleemodel';





const API_LINK1 = 'http://localhost:3000/taskd/create'
@Injectable({
  providedIn: 'root'
})
export class TravaildetService {
  constructor(  private http: HttpClient) { }

  add(travaildt: Travaildetailleemodel){
    console.log(travaildt);
    return this.http.post(API_LINK1, Travaildetailleemodel);
  }
}