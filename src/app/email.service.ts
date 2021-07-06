import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { Email } from "./_models/email.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private API_URL: string = 'http://localhost:3000';

  private filteredMessagesSource$ = new BehaviorSubject<Email[]>([]);
  filteredMessages$ = this.filteredMessagesSource$.asObservable();

  private messageSource$ = new BehaviorSubject<Email>({});
  currentMessage$ = this.messageSource$.asObservable();

  private newSearch$ = new Subject<boolean>();
  isNewSearch$ = this.newSearch$.asObservable();

  // methods
  constructor(private http: HttpClient){}

  get inbox(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/inbox`);
  }

  changeMessage(message: Email) {
    this.messageSource$.next(message)
  }

  newSearch(messages: Email[]){
    this.newSearch$.next(true);
    this.filteredMessagesSource$.next(messages);
  }


}
