import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PieceVue } from 'src/app/Models-SD/PieceVue';
import { Travailmodel } from '../../Models/Travailmodel';



const API_LINK1 = 'http://localhost:3000/task/create'
@Injectable({
  providedIn: 'root'
})
export class piecesVueService  {
  constructor(  private http: HttpClient) { }


  allPieces(): Observable<PieceVue[]> {
    return this.http.get<PieceVue[]>('http://localhost:3000/pieces');   }
}