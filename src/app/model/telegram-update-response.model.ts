import ChatMessageModel from "./chat-message.model";

export default interface TelegramUpdateResponseModel {
  ok: boolean,
  result: ChatMessageModel[]
}
