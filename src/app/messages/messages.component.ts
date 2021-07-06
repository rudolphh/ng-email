import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EmailService } from '../email.service';
import { Email } from '../_models/email.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  inboxSubscription !: Subscription;

  emails : Email[] = [];

  constructor(private emailService: EmailService){}

  ngOnInit(): void {
    this.inboxSubscription = this.emailService.inbox.subscribe((emails) => {
      this.emailService.newSearch(emails);
      //this.setSelectedMessage(emails[0]);
    });

    this.emailService.filteredMessages$.subscribe((emails) => this.emails = emails);
  }

  setSelectedMessage(message: Email) {
    this.emailService.changeMessage(message);
  }

  ngOnDestroy(): void {
    if(this.inboxSubscription){
      this.inboxSubscription.unsubscribe();
    }
  }
}
