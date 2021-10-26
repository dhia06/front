import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guser } from 'src/app/Models/guser';
import { User } from 'src/app/Models/user';


const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedUser:string;
  public loggedUser2:string;
  public isloggedIn: Boolean = false;


  constructor(private http: HttpClient,private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

 
  login1(credentials: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/co/signin',credentials);
  
  }




  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/get');   }

    
    getById(id:number){
      return this.http.get<User>('http://localhost:3000/co/verify/'+id)
    
    }


  login11(credentials: any) {
    return this.http.post<any>('http://localhost:3000/co/signin',credentials)
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }

              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }


  login(credentials: any) {
    return this.http.post<any>('http://localhost:3000/lo/signin', credentials)
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.accessToken) {
                console.log("my userrr roleee "+JSON.stringify(user.role));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            let currentUser= localStorage.getItem('user');

            if (user.role.indexOf('admin') >-1) //this.roles== undefiened
           { this.router.navigate(['/dashboard'])
                
            }
            if (user.role.indexOf('User') >-1) //this.roles== undefiened
            { this.router.navigate(['/Interfaceclient'])
                 
             }
             console.log("firstname "+JSON.stringify(user.firstname));
             console.log("lastname :"+JSON.stringify(user.lastname));


        }
        this.loggedUser=user.firstname;
        this.loggedUser2=user.lastname;
        this.isloggedIn = true;

        localStorage.setItem('loggedUser',this.loggedUser);
        console.log("loggeduser :"+this.loggedUser);
            return user;
        }));
}


getthem(): Observable<Guser> {
  return this.http.get<Guser>('http://localhost:3000/lo/hey');
}


}

