import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../Models/Article';

const API_LINK1 = 'http://localhost:3000/article/create'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(  private http: HttpClient) { }

  ajout(article:Article ){
    console.log(Article);
    return this.http.post(API_LINK1, Article);
  }
}