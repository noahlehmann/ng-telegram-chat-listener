import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChatMessageComponent} from './component/chat-message/chat-message.component';
import {ApiKeyReaderService} from "./util/api-key-reader.service";
import {ChatFeedComponent} from './component/chat-feed/chat-feed.component';
import {TelegramService} from "./util/telegram.service";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatFeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiKeyReaderService, TelegramService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
