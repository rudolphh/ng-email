import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailService } from '../email.service';
import { Email } from '../_models/email.model';

@Component({
  selector: '[app-message-details]',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css'],
})
export class MessageDetailsComponent implements OnInit {
  message$!: Observable<Email>;
  message!: Email;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.currentMessage$.subscribe(
      (message: Email) => (this.message = message)
    );
    this.emailService.isNewSearch$.subscribe((isNew) => {
      if (isNew) this.emailService.selectMessage({});
    });
  }

  replaceBreaksWithParagraphs(input: string) {
    if (input) {
      input = this.filterEmpty(input.split('\n')).join('</p><p>');
      return '<p>' + this.wrapURLs(input, true) + '</p>';
    }
    return '';
  }

  filterEmpty(arr: string[]) {
    var new_arr = [];

    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] != '') new_arr.push(arr.pop());
      else arr.pop();
    }

    return new_arr.reverse();
  }

  isEmptyObject(obj: Object) {
    return obj && Object.keys(obj).length === 0;
  }

  wrapURLs(text: string, new_window: boolean) {
    var url_pattern =
      /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/gi;
    var target = new_window === true || new_window == null ? '_blank' : '';

    return text.replace(url_pattern, function (url) {
      var protocol_pattern = /^(?:(?:https?|ftp):\/\/)/i;
      var href = protocol_pattern.test(url) ? url : 'http://' + url;
      return '<a href="' + href + '" target="' + target + '">' + url + '</a>';
    });
  }
}
