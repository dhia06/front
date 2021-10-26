import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Notificationss } from '../Models/Notification';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Projet } from '../Models/Projet';
@Injectable({
  providedIn: 'root'
})
export class NotificationnService {

  API_SERVER = "http://localhost:3000/notification";

  constructor(private httpClient: HttpClient,
    ) { }



  //   public related = new BehaviorSubject('First Message');
  //   sharedMessage = this.related.asObservable();
  
 
  
  //   setMessage(data) {
  //     this.related.next(data)
  //   }

    
  //   public getMessage(){
  //   return this.related
  // }
    


public readServices(){
  return this.httpClient.get<Notificationss[]>(`${this.API_SERVER}`);
}


private siblingMsg = new Subject<string>();

@Output() send = new EventEmitter();






}