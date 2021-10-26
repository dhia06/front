import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { title } from 'process';
import Pusher from 'pusher-js'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationnService } from './notification.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
//   @Output()
//static message;


@Input() message : any;

  @Output() sendRequest = new EventEmitter();
  sendEvent(){
    this.submit();
    this.sendRequest.emit(this.message); 
    console.log("voilaa",this.message)
   }
   title:any;

  constructor(private http:HttpClient, private service: NotificationsService ,private route:Router,private serv :NotificationnService) {}

  ngOnInit(): void {
  }
  OnSuccess(){
    this.title=this.serv.readServices();

    this.message=this.service.success(title,' Adminooooo a lancé un appel doffre avec  succes!' ,
     {showProgressBar: true,
    
    })
   






  console.log(this.OnSuccess)

  





}
submit(): void{
  this.http.post('http://localhost:3000/pusher/message',{
    username:"",
    message:this.message
  }).subscribe( ()=>this.message= '');
  
  
  }
}