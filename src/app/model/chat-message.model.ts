export default interface ChatMessageModel {
  update_id: number;
  message: {
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
      title: string;
    }
    date: number;
    text: string;
  }
}
