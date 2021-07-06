import { EventEmitter, Output } from "@angular/core";
import { Component, Input, OnInit } from "@angular/core";
import { EmailService } from "src/app/_services/email.service";
import { Email } from "src/app/_models/email.model";
import { DataService } from "src/app/_services/data.service";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {

  @Input() emails : Email[] | null = [];
  @Output() selectMessageEvent = new EventEmitter<Email>();

  selectedIndex : number = -1;
  today = new Date(Date.now()).toISOString();

  constructor(private emailService: EmailService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.isNewSearch$.subscribe((isNew) => {
      if(isNew) {
        this.selectedIndex = -1;
      }
    })
  }

  isSameDay(d1: string, d2: string) {
    var day1 = new Date(d1);
    var day2 = new Date(d2);
    var result = day1.getFullYear() === day2.getFullYear() &&
      day1.getMonth() === day2.getMonth() &&
      day1.getDate() === day2.getDate();

    return result;
  }

  selectMessage(index: number, message : Email) {
    this.selectedIndex = index;
    this.selectMessageEvent.emit(message);
  }

  isSelected(index: number) {
    return index === this.selectedIndex;
  }

  public trackItem (index: number, item: Email) {
    return item.id;
  }
}
