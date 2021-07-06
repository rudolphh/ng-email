import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailService } from '../email.service';
import { Email } from '../_models/email.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  subscription !: Subscription;
  emails : Email[] = [];

  constructor(private emailService: EmailService){}

  ngOnInit(): void {
    this.emailService.displayedMessages$.subscribe((emails) => this.emails = emails);
  }

  setSelectedMessage(message: Email) {
    this.emailService.selectMessage(message);
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
