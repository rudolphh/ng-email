import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesModule } from './messages/messages.module';
import { MessageDetailsModule } from './message-details/message-details.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessagesModule,
    MessageDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
