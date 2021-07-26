import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Email } from "../_models/email.model";
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private API_URL: string = 'api'//'http://localhost:3000';
  something !: Observable<Email>;

  constructor(private http: HttpClient, private dataService: DataService){}

  get inbox(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/inbox`);
  }

  get tagged(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/tagged`);
  }

  get sentMail(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/sentmail`);
  }

  get drafts(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/drafts`);
  }

  get trash(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/trash`);
  }

  deleteMessage(id: number) {
    console.log(id);
    this.http.delete<Email>(`${this.API_URL}/inbox/${id}`).toPromise().then((data) => {
      console.log('delete returns', data);
    })
    this.inbox.subscribe(data => { console.log(data); });
  }


}
