export const getMinId = (arr) => {
  const arrTempIds = arr.map(ob => ob.id).filter(id => isNewId(id));
  if(arrTempIds.length === 0) { return -1; }
  return Math.min(...arrTempIds) - 1;
};

export const isNewId = id => {
  return !isNaN(id) && id < 0;
}

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
export const shuffleQuestions = questions => {
  const newQuestions = shuffleArr([...questions]);
  return newQuestions;
}; 

export const shuffleOptions = options => {
  const newOptions = shuffleArr([...options]);
  return newOptions;
}

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
}