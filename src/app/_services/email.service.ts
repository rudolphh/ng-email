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

  get emails(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.API_URL}/emails`);
  }

  // get tagged(): Observable<Email[]> {
  //   return this.http.get<Email[]>(`${this.API_URL}/tagged`);
  // }

  // get sentMail(): Observable<Email[]> {
  //   return this.http.get<Email[]>(`${this.API_URL}/sentmail`);
  // }

  // get drafts(): Observable<Email[]> {
  //   return this.http.get<Email[]>(`${this.API_URL}/drafts`);
  // }

  // get trash(): Observable<Email[]> {
  //   return this.http.get<Email[]>(`${this.API_URL}/trash`);
  // }

  deleteMessage(message: Email) {
    message.trash = true;
    this.http.put(`${this.API_URL}/emails/${message.id}`, message).toPromise()
      .then((data) => {
        this.dataService.deleteMessage(message.id!)
      });
    // this.http.delete<Email>(`${this.API_URL}/emails/${id}`).toPromise()
    //   .then((data) => {
    //     this.dataService.deleteMessage(id);
    //   })
  }


}
