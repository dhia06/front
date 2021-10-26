import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../Models/Article';

const API_LINK1 = 'http://localhost:3000/article/create'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  ajout(article:Article ){
    console.log(Article);
    return this.httpClient.post(API_LINK1, Article);
  }

  API_SERVER = "http://localhost:3000/article";
  API_SERVERR = "http://localhost:3000/avoir";
  constructor(private httpClient: HttpClient) { }
  public readTravaux(){
    return   this.httpClient.get<Article>(`${this.API_SERVER}`); 
  }
  
  public createTravaux(Article: Article){
    return this.httpClient.post<Article>(`${this.API_SERVER}/create`, Article);
  }
  
  public updateContact(Article: Article){
    return this.httpClient.put<Article>(`http://localhost:3000/article/update/`+Article.id, Article);
  }
  update(id, data): Observable<any> {
    return this.httpClient.put(`${'http://localhost:3000/update'}/${id}`, data);
  }
  public deleteContact(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/delete/${id}`);
  }
  deleteserv(Article:Article){
    return this.httpClient.delete<Article>('http://localhost:3000/Servicet/'+Article.id+'/delete');
  }
  addprix(Article:Article){
    return this.httpClient.post<Article>(`${this.API_SERVERR}/create`, Article);
  }

  
}


