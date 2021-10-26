import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guser } from 'src/app/Models/guser';
import { User } from 'src/app/Models/user';
import jwt_decode from "jwt-decode";

const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedUser:string;
  public loggedUser2:string;
  public isloggedIn: Boolean = true;
  public role:string;

  constructor(private http: HttpClient,private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

 
  login1(credentials: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/co/signin',credentials);
  
  }



  isAdmin():Boolean{

  if (this.isAuthenticated1()) //this.roles== undefiened
    {
  return (this.role.indexOf('admin') >-1) ;
  
  }
    }
    
   isUser():Boolean{
       if (this.isAuthenticated1()) //this.roles== undefiened
    
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
    /////


   getToken1(): String {
    var rolii = localStorage.getItem('role');
    var decoded = jwt_decode(rolii);    
    console.log(decoded);
    return rolii;
     }
   
     isAuthenticated1(): boolean {
       const token = this.getToken1();
       if (!token) {
         return false;  }
    return true;
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

  // logout() {
  //     localStorage.removeItem('currentUser');
  //     this.currentUserSubject.next(null);
  // }



       // remove user from local storage to log user out
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.role = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('loggedUser2');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/']);
    }


    public rolo='professionnel';
  login(credentials: any) {
  
    return this.http.post<any>('http://localhost:3000/lo/signin', credentials)
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.accessToken) {
                console.log("my userrr roleee "+JSON.stringify(user.role));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            let currentUser= localStorage.getItem('user');

            if (user.role.indexOf('admin') >-1) //this.roles== undefiened
           { this.router.navigate(['/dashboard/tab-données'])
                
            }
            if (user.role.indexOf('User') >-1) //this.roles== undefiened
            { this.router.navigate(['/Interfaceclient'])
                 
             }
             if (user.role.indexOf('client') >-1) //this.roles== undefiened
             { this.router.navigate(['/Interfaceclient'])
                  
              }
             if (user.role.indexOf('professionnel') >-1) //this.roles== undefiened
             { this.router.navigate(['/shared'])
          //   this.rolo = user.role;
             localStorage.setItem('rolo',this.rolo);
             console.log("7777777",user.role);
             console.log("99999",user.firstname);
             console.log("fffffff", localStorage.setItem('rolo',user.role.indexOf('professionnel')));


            //  { this.router.navigate(['/prof'])
              }
             console.log("firstname "+JSON.stringify(user.firstname));
             console.log("lastname :"+JSON.stringify(user.lastname));

        
        this.loggedUser=user.firstname;
        this.loggedUser2=user.lastname;
        this.isloggedIn = true;
        this.accessToken=user.accessToken

        localStorage.setItem('loggedUser','this.loggedUser2' + 'this.loggedUser');
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('loggedUser2',this.loggedUser2);
        localStorage.setItem('isloggedIn',String(true));
        localStorage.setItem('accessToken',this.accessToken);
        console.log("loggeduser :"+this.loggedUser2);

   



            return user;
            }    }));
}

accessToken:string
getthem(): Observable<Guser> {
  return this.http.get<Guser>('http://localhost:3000/lo/hey');
}


}

