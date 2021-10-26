import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projet } from '../Models/Projet';
import { ProjetService } from '../nv-projet/projet.service';

import { LoginService } from 'src/app/Authentification/logginpro/login.service';
import { User } from 'src/app/Models/user';

import Pusher from 'pusher-js';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  //message = '';
  
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts: any;
  startIndex = 0;
  endIndex = 5;
  data$:Observable<any>;
  data:any;
  loading = false;
  currentUser: User;
  userFromApi: User;
  @Input() message : any;
  
kk:any;

  process($event){
    this.kk = $event ;
    console.log("dataaaaaaaaaaaaaaaa :",this.kk);
    console.log("ca marche",$event);
  }






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

  constructor(private http: HttpClient, private service: ProjetService, private router: Router
    , public userService: LoginService, 
    private servicee: NotificationsService,) 
 { }

 


 OnLogout(){
   this.userService.logout();
 }
  

public listprojects:any
  link='http://localhost:4200/repondre/1';


  ngOnInit(): void 
{
  this.loading = true;
  Pusher.logToConsole = true;
  const pusher = new Pusher('6a297c565ec2aaf6878b', {
    cluster: 'eu'
  });
  const channel = pusher.subscribe('chat');
  channel.bind('message', data => {
  const title= 'Notification';
  const noumro =localStorage.getItem('noumrou');
  
  console.log("ffffffyyyyyyyyyf", localStorage.getItem('noumrou'));

  console.log('seee noumro',noumro);
  this.message=this.servicee.success(title,' Admin a lancé un appel d`offre avec  succes!', {
  showProgressBar: true,
    }).click.subscribe(()=>{
this.router.navigate(['/repondre', noumro])}
      // window.location.assign('http://localhost:4200/repondre/',noumrou)}
    );
  });

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
    this.router.navigate(['/dashboard/app-doffres/details/', personne.id]);}


}
