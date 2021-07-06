import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EmailService } from "../email.service";
import { Email } from "../_models/email.model";


@Component({
  selector: '[app-message-details]',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  message$ !: Observable<Email>;
  message !: Email;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.currentMessage.subscribe((message: Email) => this.message = message);
  }

  replaceBreaksWithParagraphs(input: string) {
    if(input){
      input = this.filterEmpty(input.split('\n')).join('</p><p>');
      return '<p>' + input + '</p>';
    }
    return '';
  }

  filterEmpty(arr : string[]) {
    var new_arr = [];

    for (var i = arr.length-1; i >= 0; i--)
    {
        if (arr[i] != "")
            new_arr.push(arr.pop());
        else
            arr.pop();
    }

    return new_arr.reverse();
  };

  isEmptyObject(obj : Object) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
