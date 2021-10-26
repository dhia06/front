import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Guser } from '../Models/guser';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {
  erreur = 0;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveUsers();
    console.log("users :" + JSON.stringify(this.retrieveUsers));
  }

  user = new Guser();

  public listusers: any;

  retrieveUsers() {
    this.authService.getthem().subscribe(
      (data: any) => {

        this.listusers = data;
        console.log(data);

      });

  }


  login(loginForm: any) {
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        console.log("my data" + data);
        localStorage.setItem('token', JSON.stringify(data));
        let user = JSON.parse(localStorage.getItem("user"));
        console.log("the main user  " + JSON.stringify(user));
        error: (error: any) =>
          console.log("mistake " + error);

      });

    Swal.fire('Great', 'Votre authentification a été effectuée avec succès', 'success')
  }


}
