import data from './data';
import { newTest, newQuestion, newOption } from '../common';

export default function getJsonTests() {
  return data.questionnaires.map(
    (t, index) => newTest((index + 1) * -1, {
      title: t.title,
      questions: getJsonQuestions(t.questions, index),
      modification: 'none'
    })
  );
}

function getJsonQuestions(questions, testIndex) {
  return questions.map(
    (q, index) => newQuestion( (((testIndex + 1) * 10) + (index + 1)) * -1, {
      topic: q.topic || '',
      text: q.question,
      infoIfCorrect: q.infoIfCorrect || '',
      options: getJsonOptions(q.options, testIndex, index),
      modification: 'none'
    })
  );
}

function getJsonOptions(options, testIndex, questionIndex) {
  function getId(index) {
    return (((testIndex + 1) * 100) + ((questionIndex + 1) * 10) + (index + 1)) * -1;
  }
  return options.map(
    (o, index) => newOption(getId(index), {
      text: o.text,
      isCorrect: o.isCorrect,
      modification: 'none'
    })
  );
}