import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-logginpro',
  templateUrl: './logginpro.component.html',
  styleUrls: ['./logginpro.component.scss']
})
export class LogginproComponent implements OnInit {

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
       } )
   ;
   Swal.fire('Great', 'You have just been authentified !', 'success')
   }
   
  }