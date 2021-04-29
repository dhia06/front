import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //l'authentification d un professionnel
  login(credentials: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/co/signin',credentials);
  
  }

}