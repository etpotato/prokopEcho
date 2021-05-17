const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1855434521:AAH8yD4eNlFvDx0qprTYFs3tZ0EuamRqeqM';

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет, Друг!');
});
