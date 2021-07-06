import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Email } from "../_models/email.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private API_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient){}

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


}
