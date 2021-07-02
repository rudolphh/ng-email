import { NgModule } from "@angular/core";
import { ReplyComponent } from "./reply/reply.component";
import { MessageDetailsComponent } from './message-details.component';

@NgModule({
  declarations: [
    MessageDetailsComponent,
    ReplyComponent
  ],
  imports: [],
  exports: [MessageDetailsComponent]
})
export class MessageDetailsModule {}
