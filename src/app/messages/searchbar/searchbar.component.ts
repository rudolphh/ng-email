import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Email } from 'src/app/_models/email.model';

import { debounceTime, filter, map, takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  searchText: FormControl = new FormControl();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    this.dataService.resetSearchText$.subscribe(() => { this.searchText.setValue('', { emitEvent: false })})

    this.searchText.valueChanges.pipe(debounceTime(300)).subscribe((query) => {
      this.dataService.collectionMessages$
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
          this.dataService.setDisplayedMessages(emails);
        });
    });
  }
}
