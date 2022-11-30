import {Component, OnInit} from '@angular/core';
import ChatMessageModel from "../../model/chat-message.model";
import {TelegramService} from "../../util/telegram.service";
import {environment} from "../../../environments/environment";

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
      let date = Date.now();

      this.telegramService.getUpdates().toPromise().then(
        res => {
          this.messages = res.result.filter(res => {
            return res.message != undefined
              && res.message.chat.title == environment.groupName
              && res.message.text != undefined
          });
        }
      )
    }, 5000)
  }
}
