import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Models/user';

import { Travaildetailleemodel } from '../../Models/Travaildetailleemodel';



const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  user: User;

  constructor(private http: HttpClient) { }


  allTravauxdet(): Observable<Travaildetailleemodel[]> {
    return this.http.get<Travaildetailleemodel[]>('http://localhost:3000/taskd');
  }

  addArticle(art: any) {
    return this.http.post('http://localhost:3000/article/create', art);
  }


}