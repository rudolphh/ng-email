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

  inboxEmails$ !: Observable<Email[]>;
  inboxSubscription !: Subscription;

  emails : Email[] = [];

  constructor(private emailService: EmailService){}

  ngOnInit(): void {
    this.inboxEmails$ = this.emailService.inbox;
    this.inboxSubscription = this.inboxEmails$.subscribe((emails) => {
      this.emails = emails;
      this.setSelectedMessage(emails[0]);
    })
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
