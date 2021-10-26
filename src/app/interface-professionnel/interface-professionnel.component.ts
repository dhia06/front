import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Authentification/logginpro/login.service';
import { User } from 'src/app/Models/user';

// import { User } from '../Models/user';

// import { LoginService } from '../Authentification/logginpro/login.service';
@Component({
  selector: 'app-interface-professionnel',
  templateUrl: './interface-professionnel.component.html',
  styleUrls: ['./interface-professionnel.component.scss']
})
export class InterfaceProfessionnelComponent implements OnInit {

  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
      public userService: LoginService,
    
  ) {
      // this.currentUser = this.userService.currentUserValue;
  }
  OnLogout(){
    this.userService.logout();
  }
    
  ngOnInit() {
      this.loading = true;
      // console.log("iiiiiiiiiiiii",this.currentUser)
      // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      //     this.loading = false;
      //     this.userFromApi = user;
      // });
  }
}
