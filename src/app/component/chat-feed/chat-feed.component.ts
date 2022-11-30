import {Component, OnInit} from '@angular/core';
import ChatMessageModel from "../../model/chat-message.model";
import {TelegramService} from "../../util/telegram.service";

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.scss']
})
export class ChatFeedComponent implements OnInit {

  messages: ChatMessageModel[] = [];

  constructor(private telegramService: TelegramService) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.telegramService.getUpdates().toPromise().then(
        res => {
          this.messages = res.result.filter(res => {
            return res.message != undefined
              && res.message.chat.title == "Boom WS 22"
              && res.message.text != undefined
          });
        }
      )
    }, 5000)
  }
}
