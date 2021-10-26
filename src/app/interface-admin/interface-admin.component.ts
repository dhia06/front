import { Component, DoCheck, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { LoginService } from '../Authentification/logginpro/login.service';
import { User } from '../Models/user';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {animate, style, transition, trigger} from '@angular/animations';
import { DattaConfig } from '../app-config';


@Component({
  selector: 'app-interface-admin',
  templateUrl: './interface-admin.component.html',
  styleUrls: ['./interface-admin.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class InterfaceAdminComponent implements OnInit, DoCheck  {
    public visibleUserList: boolean;
    public chatMessage: boolean;
    public friendId: boolean;
    public dattaConfig: any;
  

    onChatToggle(friend_id) {
      this.friendId = friend_id;
      this.chatMessage = !this.chatMessage;
    }
  
    ngDoCheck() {
      if (document.querySelector('body').classList.contains('datta-rtl')) {
        this.dattaConfig['rtl-layout'] = true;
      } else {
        this.dattaConfig['rtl-layout'] = false;
      }
    }

    
    loading = false;
    users: User[] = [];

    constructor(private userService: LoginService,config: NgbDropdownConfig, ) {
        config.placement = 'bottom-right';
        this.visibleUserList = false;
        this.chatMessage = false;
        this.dattaConfig = DattaConfig.config;
      }
    
     

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}