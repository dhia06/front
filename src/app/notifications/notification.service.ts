import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notificationss } from '../Models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationnService {

  API_SERVER = "http://localhost:3000/notification";

  constructor(private httpClient: HttpClient) { }


public readServices(){
  return this.httpClient.get<Notificationss[]>(`${this.API_SERVER}`);
}
}
