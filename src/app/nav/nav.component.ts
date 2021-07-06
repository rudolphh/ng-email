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

    switch(this.activeIndex) {
      case 1:
        this.emailService.inbox.subscribe((inboxEmails) => {
          this.dataService.setCollectionMessages(inboxEmails);
          this.dataService.setDisplayedMessages(inboxEmails)
        });
        break;
      case 2:
        this.emailService.inbox.subscribe((inboxEmails) => {
          var filteredEmails = inboxEmails.filter(email => email.important);
          this.dataService.setCollectionMessages(filteredEmails);
          this.dataService.setDisplayedMessages(filteredEmails);
        });
        break;
      case 3:
        this.emailService.tagged.subscribe((taggedEmails) => {
          this.dataService.setCollectionMessages(taggedEmails);
          this.dataService.setDisplayedMessages(taggedEmails)
        });
        break;

      case 4:
        this.emailService.sentMail.subscribe((sentEmails) => {
          this.dataService.setCollectionMessages(sentEmails);
          this.dataService.setDisplayedMessages(sentEmails);
        });
        break;
      case 5:
        this.emailService.drafts.subscribe((draftEmails) => {
          this.dataService.setCollectionMessages(draftEmails);
          this.dataService.setDisplayedMessages(draftEmails)
        });
        break;
      case 6:
        this.emailService.trash.subscribe((trashEmails) => {
          this.dataService.setCollectionMessages(trashEmails);
          this.dataService.setDisplayedMessages(trashEmails)
        });
        break;
    }
  }

  isActive(index: number) {
    return this.activeIndex === index;
  };

}
