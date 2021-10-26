import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/user';
import { LoginService } from '../Authentification/logginpro/login.service';
import { LiveChatWidgetModel, LiveChatWidgetApiModel } from '@livechat/angular-widget';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 import { PusherComponent } from '../pusher/pusher.component';
import { Color } from 'ng-uikit-pro-standard';

@Component({

  selector: 'app-interface-client',
  templateUrl: './interface-client.component.html',
  styleUrls: ['./interface-client.component.scss']
})
export class InterfaceClientComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;

  animal: string;
  name: string;
  pink: Color;
  openDialog(): void {

    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.width = "310px";
    matDialogConfig.height = "300px";
    matDialogConfig.panelClass = 'jj';
    this.dialog.open(PusherComponent, matDialogConfig);

  }



  constructor(public userService: LoginService, public dialog: MatDialog) {
    this.currentUser = this.userService.currentUserValue;
  }


  OnLogout() {
    this.userService.logout();
  }


  ngOnInit() {
    this.loading = true;
  }








  public isLiveChatWidgetLoaded: boolean = false;
  public liveChatApi: LiveChatWidgetApiModel;
  public visitor: { name: string; email: string };
  public params: { name: string; value: string }[];

  @ViewChild('liveChatWidget', { static: false })
  public liveChatWidget: LiveChatWidgetModel;



  onChatLoaded(api: LiveChatWidgetApiModel): void {
    this.liveChatApi = api;
    this.isLiveChatWidgetLoaded = true;
  }

  onChatWindowMinimized() {
    console.log('minimized')
  }

  onChatWindowOpened() {
    console.log('opened')
  }

  openChatWindow(): void {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.openChatWindow();
      console.log('opened')
    };
    console.log('opened22')
  }

  hideChatWindow() {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.minimizeChatWindow();
    };
  }
}