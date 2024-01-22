const questions = require('./questions.json');
const { Random } = require('random-js');

const actions = {
  add: 'добавить',
  edit: 'редактировать',
  delete: 'удалить',
  list: 'список товаров',
}

const getAction = (topic) => {
  const action = Object.entries(actions)
    .filter(([key, value]) => value === topic)[0][0]

  return {
    action
  };
};

const getCorrectAnswer = (topic, id) => {
  const question = questions[topic].find((question) => question.id === id);

  if (!question.hasOptions) {
    return question.answer;
  }

  return question.options.find((option) => option.isCorrect).text;
};

module.exports = { getAction, getCorrectAnswer };