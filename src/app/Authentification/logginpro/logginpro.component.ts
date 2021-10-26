import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Guser } from 'src/app/Models/guser';
import { Principal } from 'src/app/Models/principal.model';
//import { PrincipalState } from 'src/app/Models/principale.state';

import Swal from 'sweetalert2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-logginpro',
  templateUrl: './logginpro.component.html',
  styleUrls: ['./logginpro.component.scss']
})

export class LogginproComponent implements OnInit {
  private principal: Principal;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private authentificationService: LoginService,
   private router:Router,
  private http: HttpClient) { 
    
  }
  ngOnInit(): void {
    this.retrieveUsers();
    console.log("users :" + JSON.stringify(this.retrieveUsers));
  }

  user = new Guser();
  // user=new User();

  public listusers: any;

  retrieveUsers() {
    this.authentificationService.getthem().subscribe(
      (data: any) => {

        this.listusers = data;
        console.log(data);

      });

  }
  onLoggedin(){
    console.log(JSON.stringify(this.user));
  }
  


 
  login1(credentials: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/co/signin',credentials);
  
  }


OnLogout(){
  this.authentificationService.logout();
}
  
  login(loginForm: any) {
    this.authentificationService.login(loginForm.value).subscribe(
      (data) => {
        console.log("my data" + data);
        localStorage.setItem('token', JSON.stringify(data));
        let user = JSON.parse(localStorage.getItem("user"));
        console.log("the main user  " + JSON.stringify(user));
        Swal.fire('Parfait', 'Votre authentification a été effectuée avec succès !', 'success')
      });


        
        error: (error: any) =>{
        Swal.fire("Oops...", "Une erreur s'est produite,Veuillez verifier vos coordonnées!", "error");
          console.log("mistake " + error);

      }

   
  }





}
  

