import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Email } from "../_models/email.model";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private collectionMessagesSource$ = new BehaviorSubject<Email[]>([]);
  collectionMessages$ = this.collectionMessagesSource$.asObservable();

  private displayedMessagesSource$ = new BehaviorSubject<Email[]>([]);
  displayedMessages$ = this.displayedMessagesSource$.asObservable();

  private messageSource$ = new BehaviorSubject<Email>({});
  currentMessage$ = this.messageSource$.asObservable();

  private newSearch$ = new Subject<boolean>();
  isNewSearch$ = this.newSearch$.asObservable();

  private resetSearchTextSource$ = new Subject<boolean>();
  resetSearchText$ = this.resetSearchTextSource$.asObservable();

  selectMessage(message: Email) {
    this.messageSource$.next(message)
  }

  deleteMessage(id: number) {
    
  }

  setDisplayedMessages(messages: Email[]){
    this.newSearch$.next(true);
    this.displayedMessagesSource$.next(messages);
  }

  setCollectionMessages(messages: Email[]){
    this.collectionMessagesSource$.next(messages);
  }

  resetSearchText() {
    this.resetSearchTextSource$.next();
  }
}
