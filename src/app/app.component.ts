import {Component} from '@angular/core';
import ChatMessageModel from "./model/chat-message.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: ChatMessageModel[] = [
    {
      message_id: 0,
      date: Date.now(),
      from: {
        id: 0,
        is_bot: true,
        first_name: "Testname"
      },
      chat: {
        id: 0,
        type: "private",
        first_name: "Testname"
      },
      text: "Test Message"
    }
  ]
  title = 'ng-telegram-chat-listener';
}
