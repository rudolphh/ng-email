import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../_services/data.service';
import { EmailService } from '../_services/email.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  activeIndex : number = 1;

  constructor(private emailService: EmailService, private dataService: DataService) { }

  ngOnInit(): void {
    this.setInbox(this.activeIndex);
  }

  setInbox(index: number){
    this.activeIndex = index;
    this.dataService.resetSearchText();

    this.emailService.emails.subscribe((inboxEmails) => {

      let filteredEmails;
      switch(this.activeIndex) {
        case 1:
            filteredEmails = inboxEmails.filter(email => !email.draft && !email.sent && !email.trash);
          break;
        case 2:
            filteredEmails = inboxEmails.filter(email => email.important && !email.trash);
          break;
        case 3:
            filteredEmails = inboxEmails.filter(email => email.tagged);
          break;
        case 4:
            filteredEmails = inboxEmails.filter(email => email.sent)
          break;
        case 5:
            filteredEmails = inboxEmails.filter(email => email.draft)
          break;
        case 6:
            filteredEmails = inboxEmails.filter(email => email.trash)
          break;
        default:
          filteredEmails = inboxEmails.filter(email => email);
      }

      this.dataService.setCollectionMessages(filteredEmails);
      this.dataService.setDisplayedMessages(filteredEmails);
    });
  }

  isActive(index: number) {
    return this.activeIndex === index;
  };

}
