import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesModule } from './messages/messages.module';
import { MessageDetailsModule } from './message-details/message-details.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmailData } from './message-data';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MessagesModule,
    MessageDetailsModule,
    HttpClientInMemoryWebApiModule.forRoot(EmailData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
