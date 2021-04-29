import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Travailmodel } from '../../Models/Travailmodel';



const API_LINK1 = 'http://localhost:3000/travail/create'
@Injectable({
  providedIn: 'root'
})
export class TravailService {
  constructor(  private http: HttpClient) { }

  createe(travail: Travailmodel){
    console.log(travail);
    return this.http.post(API_LINK1, Travailmodel);
  }
}