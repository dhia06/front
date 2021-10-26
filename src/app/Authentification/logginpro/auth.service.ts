import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import decode from 'jwt-decode';
import { Guser } from 'src/app/Models/guser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    public loggedUser: string;
    public isloggedIn: Boolean = false;
    public role: string;
    constructor(private router: Router, private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Guser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    private currentUserSubject: BehaviorSubject<Guser>;
    public currentUser: Observable<Guser>;

    public get currentUserValue(): Guser {
        return this.currentUserSubject.value;
    }

    getthem(): Observable<Guser> {
        return this.http.get<Guser>('http://localhost:3000/lo/hey');
    }




    logout() {
        this.isloggedIn = false;
        this.loggedUser = undefined;
        this.role = undefined;
        localStorage.removeItem('loggedUser');
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
        this.router.navigate(['/']);
    }


    // users: Guser[] = [{"id":1,"username":"admin","password":"123","roles":['admin']},
    // {"id":2,"username":"nadhem","password":"123","roles":['User']} ];


    login1(credentials: any): Observable<any> {
        return this.http.post<any>('http://localhost:3000/co/signin', credentials);

    }


    SignIn(user: Guser): Boolean {
        isloggedIn: true;
        let validUser: Boolean = false;
        this.getthem().forEach((curUser) => {
            if (user.username === curUser.username && user.password == curUser.password) {
                validUser = true;
                this.loggedUser = curUser.username;
                this.isloggedIn = true;
                this.role = curUser.role;
                localStorage.setItem('loggedUser', this.loggedUser);
                localStorage.setItem('isloggedIn', String(this.isloggedIn));
            }
        });
        return validUser;
    }


    isAdmin():Boolean{
        let to=localStorage.getItem('token');
     if (to) //this.roles== undefiened
    
     return (this.role.indexOf('admin') >-1) ;

    else{
        return false;
    }
     
     }
     
    isUser():Boolean{
        if (this.role) //this.roles== undefiened
     
        return (this.role.indexOf('User') >-1) ;
        
        }
   
    getToken(): String {
        return localStorage.getItem('accessToken');
      }
    
      isAuthenticated(): boolean {
        const token = this.getToken();
        if (!token) {
          return false;  }
     return true;
      }





    login(credentials: any) {
        isloggedIn: true;
        return this.http.post<any>('http://localhost:3000/lo/signin', credentials)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.accessToken) {
                    console.log("my userrr roleee "+JSON.stringify(user.role));
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                let currentUser= localStorage.getItem('user');
 
                if (user.role.indexOf('admin') >-1) //this.roles== undefiened
               { this.router.navigate(['/extension'])
                    
                }
                if (user.role.indexOf('User') >-1) //this.roles== undefiened
                { this.router.navigate(['/'])
                     
                 }


            }
                return user;
            }));
    }



}