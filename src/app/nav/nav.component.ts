import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  activeIndex : number = 1;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.setInbox(this.activeIndex);
  }

  setInbox(index: number){
    this.activeIndex = index;

    switch(this.activeIndex) {
      case 1:
        this.emailService.inbox.subscribe((inboxEmails) => {
          this.emailService.setCollectionMessages(inboxEmails);
          this.emailService.setDisplayedMessages(inboxEmails)
        });
        break;
      case 2:
        this.emailService.inbox.subscribe((inboxEmails) => {
          this.emailService.setCollectionMessages(inboxEmails);
          var filteredEmails = inboxEmails.filter(email => email.important);
          this.emailService.setDisplayedMessages(filteredEmails);
        });
        break;
      case 3:
        this.emailService.tagged.subscribe((taggedEmails) => {
          this.emailService.setCollectionMessages(taggedEmails);
          this.emailService.setDisplayedMessages(taggedEmails)
        });
        break;

      case 4:
        this.emailService.sentMail.subscribe((sentEmails) => {
          this.emailService.setCollectionMessages(sentEmails);
          this.emailService.setDisplayedMessages(sentEmails);
        });
        break;
      case 5:
        this.emailService.drafts.subscribe((draftEmails) => {
          this.emailService.setCollectionMessages(draftEmails);
          this.emailService.setDisplayedMessages(draftEmails)
        });
        break;
      case 6:
        this.emailService.trash.subscribe((trashEmails) => {
          this.emailService.setCollectionMessages(trashEmails);
          this.emailService.setDisplayedMessages(trashEmails)
        });
        break;
    }
  }

  isActive(index: number) {
    return this.activeIndex === index;
  };

}
