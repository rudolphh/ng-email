import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EmailService } from "src/app/email.service";
import { Email } from "src/app/_models/email.model";

import { debounceTime, map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchText: FormControl = new FormControl();

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.searchText.valueChanges
      .pipe(debounceTime(200))
      .subscribe(query => {
        this.emailService.inbox.pipe(
          map((emails: Email[]) => {
            var filteredEmails = emails.filter(email => (email.title + ' ' + email.content).includes(query));
            return filteredEmails;
          })
        ).subscribe((emails) => this.emailService.setFilteredMessages(emails));
      });
  }
}
