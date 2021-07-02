import { NgModule } from '@angular/core';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagesComponent } from './messages.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    SearchbarComponent,
    MessageListComponent,
    MessagesComponent
  ],
  exports: [MessagesComponent]
})

export class MessagesModule { }
