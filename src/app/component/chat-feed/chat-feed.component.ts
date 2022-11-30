import {Component, OnInit} from '@angular/core';
import ChatMessageModel from "../../model/chat-message.model";
import {ApiKeyReaderService} from "../../util/api-key-reader.service";

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.scss']
})
export class ChatFeedComponent implements OnInit {

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

  constructor(apiKeyService: ApiKeyReaderService) {
    console.log(apiKeyService.getTelegramApiKey())
  }

  ngOnInit(): void {
  }

}
