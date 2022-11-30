import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import TelegramUpdateResponseModel from "../model/telegram-update-response.model";

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  private readonly BASE_URL: string = "https://api.telegram.org";
  private readonly BOT_KEY: string = environment.telegramKey;
  private readonly UPDATES_URL: string = this.BASE_URL + "/bot" + this.BOT_KEY + "/getUpdates"

  constructor(private httpClient: HttpClient) {
  }

  public getUpdates(): Observable<TelegramUpdateResponseModel> {
    return this.httpClient.get<TelegramUpdateResponseModel>(this.UPDATES_URL);
  }
}
