const TelegramBot = require('node-telegram-bot-api');

const apikey = "OUR_API_KEY";
const bot = new TelegramBot(apikey, {polling:true});



bot.on('message', (msg: any) => {
  console.log(msg);
});

bot.onText(/\/start/, (msg: any) => {

  bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
      "keyboard": [["Accept"], ["Dont Accept"]]
    }
  });
});


