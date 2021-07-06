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
        this.emailService.inbox.subscribe((emails) => {
          this.emailService.setOriginalList(emails);
          this.emailService.newSearch(emails)
        });
        break;
      case 2:
        this.emailService.inbox.subscribe((emails) => {
          this.emailService.setOriginalList(emails);
          var filteredEmails = emails.filter(email => email.important);
          this.emailService.newSearch(filteredEmails);
        });
        break;
      case 3:
        this.emailService.tagged.subscribe((emails) => {
          this.emailService.setOriginalList(emails);
          this.emailService.newSearch(emails)
        });
        break;

      case 4:
        this.emailService.sentMail.subscribe((emails) => {
          this.emailService.setOriginalList(emails);
          this.emailService.newSearch(emails);
        });
        break;
      case 5:
        this.emailService.drafts.subscribe((emails) => {
          this.emailService.setOriginalList(emails);
          this.emailService.newSearch(emails)
        });
        break;
      case 6:
        this.emailService.trash.subscribe((emails) => {
          this.emailService.setOriginalList(emails);
          this.emailService.newSearch(emails)
        });
        break;
    }
  }

  isActive(index: number) {
    return this.activeIndex === index;
  };

}
