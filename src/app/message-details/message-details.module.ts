import { NgModule } from "@angular/core";
import { ReplyComponent } from "./reply/reply.component";
import { MessageDetailsComponent } from './message-details.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    MessageDetailsComponent,
    ReplyComponent
  ],
  imports: [CommonModule],
  exports: [MessageDetailsComponent]
})
export class MessageDetailsModule {}
