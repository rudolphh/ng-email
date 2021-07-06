import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmailService } from 'src/app/email.service';
import { Email } from 'src/app/_models/email.model';

import { debounceTime, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  searchText: FormControl = new FormControl();

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {

    this.searchText.valueChanges.pipe(debounceTime(300)).subscribe((query) => {
      this.emailService.filteredMessages$
        .pipe(
          map((emails: Email[]) => {
            var filteredEmails = emails.filter((email) =>
              (
                email.title?.toLowerCase() +
                ' ' +
                email.content?.toLowerCase()
              ).includes(query.toLowerCase())
            );
            return filteredEmails;
          })
        )
        .subscribe((emails) => {
          this.emailService.newSearch(emails);
        });
    });
  }
}
