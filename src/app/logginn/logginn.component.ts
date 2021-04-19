import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-logginn',
  templateUrl: './logginn.component.html',
  styleUrls: ['./logginn.component.scss']
})
export class LogginnComponent implements OnInit {

  constructor(
    private authentificationService: LoginService,
   private router:Router
  ) { }

  ngOnInit(): void {
  }

    
  login(loginForm : any) {

    this.authentificationService.login(loginForm.value).subscribe(
 
     (data)=>{
        console.log(data);
      //  error :(error) => console.log(error)*/
      let token = JSON.stringify(data.token)
 
         localStorage.setItem('token', data.accessToken);
       //   this.router.navigate(['cv']);
          error :(error: any) => console.log(error)
 
       }
    )
   ;
   }
  }