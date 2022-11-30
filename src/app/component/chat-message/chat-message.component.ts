import {Component, Input, OnInit} from '@angular/core';
import ChatMessageModel from "../../model/chat-message.model";

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input()
  response!: ChatMessageModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
