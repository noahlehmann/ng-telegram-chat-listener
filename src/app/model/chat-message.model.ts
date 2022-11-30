export default interface ChatMessageModel {
  message_id: number;
  from: {
    id: number;
    is_bot: boolean;
    first_name: string;
  }
  chat: {
    id: number;
    type: string;
    first_name: string;
  }
  date: number;
  text: string;
}
