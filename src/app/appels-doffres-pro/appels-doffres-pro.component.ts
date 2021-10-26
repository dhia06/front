import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Authentification/logginpro/login.service';
import { Projet } from '../Models/Projet';
import { User } from '../Models/user';
import { ProjetService } from '../nv-projet/projet.service';
@Component({
  selector: 'app-appels-doffres-pro',
  templateUrl: './appels-doffres-pro.component.html',
  styleUrls: ['./appels-doffres-pro.component.scss']
})
export class AppelsDoffresProComponent implements OnInit {
  message = '';
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts: any;
  startIndex = 0;
  endIndex = 5;
  data$:Observable<any>;
  
  getArrayLenght(length){
    return new Array(length/20)
  }
  getIndex(pageIndex){
    this.startIndex = pageIndex * 5;
   this.endIndex = this.startIndex + 5;
   console.log(this.startIndex);
  }
  prevIndex(length){
    this.startIndex = length * 0;
    console.log(this.startIndex)
  }
  nextIndex(endIndex){
    this.endIndex++
    console.log(this.endIndex)
  }

  constructor(private http: HttpClient,public userService: LoginService, private service: ProjetService, private router: Router) 
 { }
 

 data:any;
 loading = false;
 currentUser: User;
 userFromApi: User;

public listprojects:any

OnLogout() {
  this.userService.logout();
}

  ngOnInit(): void 
{
  this.loading = true;
  this.retrieveUsers();
  this.data$ =  this.http.get('https://jsonplaceholder.typicode.com/posts')
  this.dtOptions = {
  processing: true
   };

  }



  retrieveUsers(): void {
    this.service.AllProjet().subscribe(
      (data: any) => {
        
        this.listprojects = data;
        console.log(data);
      
      });
    
  }
  details(personne: Projet) {
    this.router.navigate(['/visualiser-app-doffres', personne.id]);}





repondre(prj: Projet) {
  this.router.navigate(['/repondre', prj.id]);}



}


