import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Projet } from '../Models/Projet';
import { ProjetService } from '../nv-projet/projet.service';
import { NotificationsService } from 'angular2-notifications';
import { NotificationnService } from './notification.service';
@Component({
  selector: 'liste-projets-admin',
  templateUrl: './liste-projets-admin.component.html',
  styleUrls: ['./liste-projets-admin.component.scss']
})
export class ListeProjetsAdminComponent implements OnInit {
@Input() message: any;
dat:any;
  @Output() sendRequest = new EventEmitter();
  prj: Projet;
  sendEvent(prj) {
    this.submit(prj);
  
    this.dat=prj.id
    console.log("voilaa", this.dat)

  }

  sendEvent2(prj) {
   // this.serv.updateMessage();
   this.sendRequest.emit(prj.id); 
    console.log("thisid", prj.id)
    this.dat=prj.id
  }


  title: any;
  //message = '';
  //title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts: any;
  startIndex = 0;
  endIndex = 5;
  data$: Observable<any>;

  getArrayLenght(length) {
    return new Array(length / 20)
  }
  getIndex(pageIndex) {
    this.startIndex = pageIndex * 5;
    this.endIndex = this.startIndex + 5;
    console.log(this.startIndex);
  }
  prevIndex(length) {
    this.startIndex = length * 0;
    console.log(this.startIndex)
  }
  nextIndex(endIndex) {
    this.endIndex++
    console.log(this.endIndex)
  }

  constructor(private http: HttpClient, private service: ProjetService,
     private router: Router, private servicee: NotificationsService, 
     private serv: NotificationnService) { }


  public listprojects: any
  @Input() msg:any;


related:any;

  ngOnInit(): void {

  //   this.serv.sharedMessage.subscribe(related =>
  //     this.related=related );

  //  this.serv.setMessage(this.related);

    this.retrieveUsers();
    this.data$ = this.http.get('https://jsonplaceholder.typicode.com/posts')
    this.dtOptions = {
      processing: true
    };

  }
  public noumrou: number;
  OnSuccess(personne: Projet) {
    this.title = this.serv.readServices();
    let idproj = personne.id;
    console.log("idproj", idproj)
    localStorage.setItem('noumrou',JSON.stringify(idproj));
    const title = 'Browser';
    console.log("title", this.title)
    // this.message = this.servicee.success(this.title, idproj, ' Admin a lancé un appel doffre avec  succes!',
    //   { showProgressBar: true, })




    // .click.subscribe(()=>{
    //   window.location.assign(this.link);
    // }








    console.log(this.OnSuccess)







  }
daa:any
  submit(us): void {
    this.http.post('http://localhost:3000/pusher/message'
      , {
        username: "", kq: this.message, us
      }).subscribe(() => this.message = this.message);


    console.log("wa3333", us.id); 



  }

  retrieveUsers(): void {
    this.service.AllProjet().subscribe(
      (data: any) => {

        this.listprojects = data;
        console.log(data);

      });

  }
  details(personne: Projet) {
    this.router.navigate(['/dashboard/app-doffres/details/', personne.id]);
  }
}
