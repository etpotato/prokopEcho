import TelegramBot from 'node-telegram-bot-api';
import express from 'express';

const TOKEN = '1855434521:AAH8yD4eNlFvDx0qprTYFs3tZ0EuamRqeqM';
const bot = new TelegramBot(TOKEN, {polling: true});
const TG_CHAT_ID = -514747166;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
  bot.sendMessage(TG_CHAT_ID, 'test');
});

app.listen(5000, () => {
  console.log('app listening on port 5000');
});



bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет, Друг!');
});