import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationnService } from './liste-projets-admin/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'datta-able';

  constructor(private router: Router,private msgservice: NotificationnService ) { }
  public messageForSibling: string;
  public subscription: Subscription;
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // set subscribe to message service
//this.subscription = this.msgservice.updateMessage().subscribe(msg => this.messageForSibling = msg);
    // this.subscription = this.msgservice.getMessage().subscribe(msg => this.messageForSibling = msg);
  }

 
  public ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

}
