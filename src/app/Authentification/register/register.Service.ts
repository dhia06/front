import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import Swal from 'sweetalert2';
const API_LINK1 = 'http://localhost:3000/login/register';
const API_LINK2 = 'http://localhost:3000/login/sigverif';
const API_LINK3 = 'http://localhost:3000/login/login';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(  private http: HttpClient) { }
  register(user: User){
    console.log("fi wost regiset");
    console.log(user);
    return this.http.post(API_LINK1, user);
  }
  singUpverif(user: User) {
    return this.http.post(API_LINK2, user);
  }
  login(user: User):Observable<any> {
    return this.http.post(API_LINK3, user);
  }
  fonction(){
    Swal.fire('Parfait', 'Votre authentification a été effectuée avec succès !', 'success')
  }
}