const TelegramBot = require('node-telegram-bot-api');
const path = require('path');
const express = require('express');
const multer  = require('multer');

const TOKEN = '1855434521:AAH8yD4eNlFvDx0qprTYFs3tZ0EuamRqeqM';
const TG_CHAT_ID = -514747166;

const bot = new TelegramBot(TOKEN, {polling: true});
const app = express();
const upload = multer();

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Работаю, новых заказов нет.', {parse_mode: 'HTML'});
});

app.use(express.static(path.join(__dirname, 'public'), {maxAge: '2h'}));

app.post('/', upload.none(), (req, res) => {
  bot.sendMessage(TG_CHAT_ID,
    '<b>Новый заказ: </b>'+req.body.tel,
    {parse_mode : 'HTML'})
   .then(()=> res.status(200).send('Номер телефона отправлен. Ожидайте звонка.'))
   .catch((error) => res.status(400).send('Ошибка отправки. Попробуйте еще раз.'));
});

app.listen(5000);
