require('dotenv').config();
const {
  Bot,
  Keyboard,
  InlineKeyboard,
  GrammyError,
  HttpError,
} = require('grammy');
const { getAction, getCorrectAnswer } = require('./utils');
const { default: axios } = require('axios');

const bot = new Bot(process.env.BOT_API_KEY);

bot.command('start', async (ctx) => {
  
  console.log(categories.data.data);
  const startKeyboard = new Keyboard()
    .text('Добавить')
    .row()
    .text('Редактировать')
    .row()
    .text('Удалить')
    .row()
    .text('Список товаров')
    .resized();
  await ctx.reply(
    'Здравстуй, господин! Слушаюсь и повинуюсь. 🤖 \nЯ помогу обновить ',
  );
  await ctx.reply('С чего начнем? Выбери тему вопроса в меню 👇', {
    reply_markup: startKeyboard,
  });
});

bot.hears(
  ['Добавить', 'Редактировать', 'Удалить', 'Список товаров'],
  async (ctx) => {
    const categories = await axios.get('http://localhost:3200/api/movies')
    const topic = ctx.message.text.toLowerCase();
    const {action} = getAction(topic)
    console.log(action)

    let inlineKeyboard

    switch (action) {
      case 'list': {
        console.log('Tick1')
        const categories2 = await axios.get('http://localhost:3200/api/movies')
        const items = categories2.data.data.map((item) => ({title: item.title, price: item.description}))
        console.log('Tick2')
        const buttonRows = items.map((item) => {
          return InlineKeyboard.text(
            `${item.title} - ${item.price}p`,
          )
        })
        console.log('Tick3', buttonRows)
        inlineKeyboard = InlineKeyboard.from(buttonRows.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []))
        break;
      }
      case 'delete': {
        const items = categories.data.data.map((item) => ({title: item.title, price: item.description, id: item.id}))
        console.log(items)
        const buttonRows = items.map((option) => [
              InlineKeyboard.text(
                `${option.title} - ${option.price}p`,
                JSON.stringify({
                  idtodel: option.id,
                }),
              ),
            ]);
      
            inlineKeyboard = InlineKeyboard.from(buttonRows);
      }
      default:
        console.log('Action is ', action)
        break;
    }
    // const { question, questionTopic } = getRandomQuestion(topic);

    // let inlineKeyboard;

    // if (question.hasOptions) {
    //   const buttonRows = question.options.map((option) => [
    //     InlineKeyboard.text(
    //       option.text,
    //       JSON.stringify({
    //         type: `${questionTopic}-option`,
    //         isCorrect: option.isCorrect,
    //         questionId: question.id,
    //       }),
    //     ),
    //   ]);

    //   inlineKeyboard = InlineKeyboard.from(buttonRows);
    // } else {
    //   inlineKeyboard = new InlineKeyboard().text(
    //     'Узнать ответ',
    //     JSON.stringify({
    //       type: questionTopic,
    //       questionId: question.id,
    //     }),
    //   );
    // }

    await ctx.reply(topic, {
      reply_markup: inlineKeyboard,
    });
  },
);

bot.on('callback_query:data', async (ctx) => {
  const callbackData = JSON.parse(ctx.callbackQuery.data);

  if (callbackData.idtodel) {
    await axios.delete(`http://localhost:3200/api/movies/${callbackData.idtodel}`)
    await ctx.reply('Success ✅');
  }
  // if (!callbackData.type.includes('option')) {
  //   const {id} = getCorrectAnswer(callbackData.type, callbackData.questionId);
  //   await ctx.reply(answer, {
  //     parse_mode: 'HTML',
  //     disable_web_page_preview: true,
  //   });
  //   await ctx.answerCallbackQuery();
  //   return;
  // }

  if (callbackData.isCorrect) {
    await ctx.reply('Верно ✅');
    await ctx.answerCallbackQuery();
    return;
  }

  const answer = getCorrectAnswer(
    callbackData.type.split('-')[0],
    callbackData.questionId,
  );
  await ctx.reply(`Неверно ❌ Правильный ответ: ${answer}`);
  await ctx.answerCallbackQuery();
});

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error('Error in request:', e.description);
  } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e);
  } else {
    console.error('Unknown error:', e);
  }
});

bot.start();