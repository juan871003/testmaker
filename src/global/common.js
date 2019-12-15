export const getMinId = (arr) => {
  const arrTempIds = arr.map(ob => ob.id).filter(id => isNewId(id));
  if(arrTempIds.length === 0) { return -1; }
  return Math.min(...arrTempIds) - 1;
};

export const isNewId = id => {
  return !isNaN(id) && id < 0;
}

/*

export function Test(id, { 
  title = '', 
  questions = [], 
  modification = 'none'
} = {}) {
  this.id = id;
  this.title = title;
  this.questions = questions;
  this.modification = modification;
  // when adding new properties, remember to add them in the clone function too
}

Test.prototype.clone = function() {
  return new Test(this.id, {
    title: this.title,
    questions: this.questions.map(q => q.clone()),
    modification: this.modification
  });
}

export function Question(id, {
  topic = '',
  text = '',
  infoIfCorrect = '',
  options = [],
  isAnswered = false,
  modification = 'none'
} = {}) {
  this.topic = topic;
  this.text = text;
  this.infoIfCorrect = infoIfCorrect;
  this.options = options;
  this.isAnswered = isAnswered;
  this.modification = modification;
  // when adding new properties, remember to add them in the clone function too
}

Question.prototype.clone = function() {
  return new Question(this.id, {
    topic: this.topic,
    text: this.text,
    infoIfCorrect: this.infoIfCorrect,
    options: this.options.map(o => o.clone()),
    isAnswered: this.isAnswered,
    modification: this.modification,
  });
}

export function Option(id, {
  text = '',
  isCorrect = false,
  isSelected = false,
  modification = 'none'
} = {}) {
  this.text = text;
  this.isCorrect = isCorrect;
  this.isSelected = isSelected;
  this.modification = modification;
  // when adding new properties, remember to add them in the clone function too
}

Option.prototype.clone = function() {
  return new Option(this.id, {
    text: this.text,
    isCorrect: this.isCorrect,
    isSelected: this.isSelected,
    modification: this.modification
  })
}
*/

export const newTest = (id, { 
  title = '', 
  questions = [], 
  modification = 'none' 
}) => ({
  id,
  title,
  questions,
  modification
});

export const newQuestion = (id, {
  topic = '',
  text = '',
  infoIfCorrect = '',
  options = [],
  isAnswered = false,
  modification = 'none'
}) => ({
  id,
  topic,
  text,
  infoIfCorrect,
  options,
  isAnswered,
  modification
});

export const newOption = (id, {
  text = '',
  isCorrect = false,
  isSelected = false,
  modification = 'none'
}) => ({
  id,
  text,
  isCorrect,
  isSelected,
  modification
});
/*
//export const optionCpy = option => Object.assign({}, option);

//export const copyOptions = options => [...options];
//export const copyOptions = options => options.map(o => optionCpy(o));
/*
export const questionCpy = question => {
  return newQuestion(question.id, {
    topic: question.topic,
    text: question.text,
    infoIfCorrect: question.infoIfCorrect,
    options: copyOptions(question.options),
    isAnswered: question.isAnswered,
    modification: question.modification
  });
}

export const copyQuestions = questions => [...questions];
// export const copyQuestions = questions => questions.map(q => questionCpy(q));

export const testCpy = (test) => {
  return newTest(test.id, {
    title: test.title,
    questions: copyQuestions(test.questions),
    modification: test.modification
  });
}

export const copyTests = tests => [...tests];
//export const copyTests = tests => tests.map(t => testCpy(t));
*/
/*
export function shuffleClonable(arr) {
  return shuffleArr(arr.map(item => item.clone()));
}
*/
export function shuffleArr(arr) {
  const arrCpy = [...arr];
  for (let i = arrCpy.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arrCpy[i], arrCpy[rand]] = [arrCpy[rand], arrCpy[i]];
  }
  return arrCpy;
}