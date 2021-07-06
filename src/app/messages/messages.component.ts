import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailService } from '../_services/email.service';
import { Email } from '../_models/email.model';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  subscription !: Subscription;
  emails : Email[] = [];

  constructor(private emailService: EmailService, private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.displayedMessages$.subscribe((emails) => {
      this.emails = emails;
    });
  }

  setSelectedMessage(message: Email) {
    this.dataService.selectMessage(message);
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
