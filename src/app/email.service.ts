import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Email } from "./_models/email.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private API_URL: string = 'http://localhost:3000';
  private messageSource = new BehaviorSubject<Email>({});
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient){}

  get inbox(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/inbox`);
  }

  changeMessage(message: Email) {
    this.messageSource.next(message)
  }
}
