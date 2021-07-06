import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { Email } from "./_models/email.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // properties
  private API_URL: string = 'http://localhost:3000';

  private displayedMessagesSource$ = new BehaviorSubject<Email[]>([]);
  displayedMessages$ = this.displayedMessagesSource$.asObservable();

  private filteredMessagesSource$ = new BehaviorSubject<Email[]>([]);
  filteredMessages$ = this.filteredMessagesSource$.asObservable();


  private messageSource$ = new BehaviorSubject<Email>({});
  currentMessage$ = this.messageSource$.asObservable();

  private newSearch$ = new Subject<boolean>();
  isNewSearch$ = this.newSearch$.asObservable();

  // methods
  constructor(private http: HttpClient){}

  get filteredMessages() {
    return this.filteredMessagesSource$.value;
  }

  // http requests
  get inbox(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/inbox`);
  }

  get tagged(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/tagged`);
  }

  get sentMail(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/sent-mail`);
  }

  get drafts(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/drafts`);
  }

  get trash(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/trash`);
  }


  selectMessage(message: Email) {
    this.messageSource$.next(message)
  }

  newSearch(messages: Email[]){
    this.newSearch$.next(true);
    this.displayedMessagesSource$.next(messages);
  }

  setOriginalList(messages: Email[]){
    this.filteredMessagesSource$.next(messages);
  }


}
