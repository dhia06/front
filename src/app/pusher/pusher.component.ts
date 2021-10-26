import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import Pusher from 'pusher-js'
import { LoginService } from '../Authentification/logginpro/login.service';
import { User } from '../Models/user';
import { LiveChatWidgetModel, LiveChatWidgetApiModel } from '@livechat/angular-widget';

@Component({
  selector: 'app-pusher',
  templateUrl: './pusher.component.html',
  styleUrls: ['./pusher.component.scss']
})
export class PusherComponent implements OnInit {
  public isLiveChatWidgetLoaded: boolean = false;
  public liveChatApi: LiveChatWidgetApiModel;
  public visitor: { name: string; email: string};
  public params: { name: string; value: string}[];

  @ViewChild('liveChatWidget', {static: false}) public liveChatWidget: LiveChatWidgetModel;










username='username';
messages=[];
message='';
loading = false;
currentUser: User;
userFromApi: User;




date = new Date();
  constructor(private http:HttpClient,public userService: LoginService) {
    this.currentUser = this.userService.currentUserValue;

   }

   nom:string;
   prenom:string;
   kelma1:string;
   kelma2:string;
   kelma3:string;
  ngOnInit(): void {
this.kelma1='Bienvenue chez BRAIN CONSULTING Tunisie';
this.kelma2='Nous avons bien reçu votre message !';
this.kelma3=' Nous vous répondrons dans les plus brefs délais.';
  this.nom =localStorage.getItem('loggedUser');
  this.prenom =localStorage.getItem('loggedUser2');

// Enable pusher logging - don't include this in production
     Pusher.logToConsole = true;
     const pusher = new Pusher('6a297c565ec2aaf6878b', { cluster: 'eu' });

    //  const pusher = new Pusher('b87a4b9b5c6824a2342f', { cluster: 'mt1' });
     const channel = pusher.subscribe('chat');
     channel.bind('message', data => {this.messages.push(data); });
  }

  alean=false;
submit(): void{
this.http.post('http://localhost:3000/pusher/message',{
  username:this.prenom,
  message:this.message
}).subscribe( ()=>this.message= '');
this.alean=true;


}

puta(){
this.message="ouiiiiiiiiiii";
}




}






  //  const pusher = new Pusher('6a297c565ec2aaf6878b', {
    //   cluster: 'eu'
    // });