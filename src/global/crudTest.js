import { API, graphqlOperation } from "aws-amplify"
import { listTests, listQuestions, listOptions } from '../graphql/queries';
import { newTest, newQuestion, newOption, isNewId } from './common';
import { createTest, createQuestion, createOption, deleteTest, deleteOption, deleteQuestion, updateQuestion } from '../graphql/mutations';
import { updateTest, updateOption } from "../graphql/mutations";
import getJsonTests from "./mock/mocker";

export const getAllTests = async (currentUrl) => {
  if(currentUrl.indexOf('http://localhost') > -1) {
    return getJsonTests();
  }
  const testsData = await getAllListData('listTests');
  const questionsData = await getAllListData('listQuestions');
  const optionsData = await getAllListData('listOptions');

  return testsData.map(t => newTest(t.id, {
    title: t.title,
    questions: questionsData.filter(
      q => q.questionTestId === t.id
    ).map(q => newQuestion(q.id, {
      topic: q.topic || '',
      text: q.text || '',
      infoIfCorrect: q.infoIfCorrect || '',
      options: optionsData.filter(
        o => o.optionQuestionId === q.id
      ).map(o => newOption(o.id, {
        text: o.text || '',
        isCorrect: o.isCorrect || false
      }))
    }))
  }));
}

async function getAllListData(queryListStr) {
  let graphqlQuery = null;
  let items = [];
  let nextToken = null;
  let params = {};

  switch(queryListStr) {
    case 'listTests':
      graphqlQuery = listTests; break;
    case 'listQuestions':
      graphqlQuery = listQuestions; break;
    case 'listOptions':
      graphqlQuery = listOptions; break;
    default:
      throw new Error('Wrong Params passed to getAllListData');  
  }

  do {
    let result = await API.graphql(graphqlOperation(graphqlQuery, params));
    items = [...items, ...result.data[queryListStr].items];
    nextToken = result.data[queryListStr].nextToken;
    params.nextToken = nextToken;
  } while(nextToken !== null);
  
  return items;
}

export const saveTestsChanges = async tests => {
  const result = [];

  for(let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const savedTest = test.modification === 'new'
      ? await saveNewTest(test)
      : test.modification === 'modified'
      ? await saveUpdatedTest(test)
      : newTest(test.id, {
          title: test.title,
          questions: await saveTestQuestions(test.id, test.questions)
        });
    result.push(savedTest);
  }
  return result;
}

export const removeTest = async test => {
  for(let i = 0; i < test.questions.length; i++) {
    const question = test.questions[i];
    removeQuestion(question);
  }
  API.graphql(graphqlOperation(deleteTest, {
    input: { id: test.id }
  }));
}

async function saveNewTest(test) {
  const savedTestResult = await API.graphql(graphqlOperation(createTest, {
    input: { title: test.title }
  }));
  return newTest(savedTestResult.data.createTest.id, {
    title: savedTestResult.data.createTest.title,
    questions: await saveNewQuestions(savedTestResult.data.createTest.id, test.questions)
  });
}

async function saveUpdatedTest(test) {
  const savedTestResult = await API.graphql(graphqlOperation(updateTest, {
    input: {
      id: test.id,
      title: test.title
    }
  }));  
  return newTest(savedTestResult.data.updateTest.id, {
    title: savedTestResult.data.updateTest.title,
    questions: await saveTestQuestions(savedTestResult.data.updateTest.id, test.questions)
  });
}

async function saveTestQuestions(testId, testQuestions) {
  const result = [];
  for(let i = 0; i < testQuestions.length; i++) {
    const question = testQuestions[i];
    if(question.modification === 'remove') {
      if(!isNewId(question.id)) {
        await removeQuestion(question.id);
      }
    } else {
      const savedQuestion = question.modification === 'new'
      ? await saveNewQuestion(testId, question)
      : question.modification === 'modified'
      ? await saveUpdatedQuestion(question.id, question)
      : await saveQuestionDetails(question);
      result.push(savedQuestion);
    }
  }
  return result;
}

async function saveNewQuestions(testId, questions) {
  const result = [];
  for(let i = 0; i < questions.length; i++) {
    if(questions[i].modification !== 'remove') {
      const savedQuestion = await saveNewQuestion(testId, questions[i]);
      result.push(savedQuestion);
    }
  }
  return result;
}

async function saveNewQuestion(testId, question) {
  const savedQuestionResult = await API.graphql(graphqlOperation(createQuestion, {
    input: {
      topic: question.topic === '' ? null : question.topic,
      text: question.text,
      infoIfCorrect: question.infoIfCorrect === '' ? null : question.infoIfCorrect,
      questionTestId: testId
    }
  }));
  return newQuestion(savedQuestionResult.data.createQuestion.id, {
    topic: savedQuestionResult.data.createQuestion.topic || '',
    text: savedQuestionResult.data.createQuestion.text,
    infoIfCorrect: savedQuestionResult.data.createQuestion.infoIfCorrect || '',
    options: await saveNewOptions(savedQuestionResult.data.createQuestion.id, question.options)
  });
}

async function saveUpdatedQuestion(questionId, question) {
  const savedQuestionResult = await API.graphql(graphqlOperation(updateQuestion, {
    input: {
      id: questionId,
      topic: question.topic === '' ? null : question.topic,
      text: question.text,
      infoIfCorrect: question.infoIfCorrect === '' ? null : question.infoIfCorrect
    }
  }));
  const result = newQuestion(questionId, {
    topic: savedQuestionResult.data.updateQuestion.topic || '',
    text: savedQuestionResult.data.updateQuestion.text,
    infoIfCorrect: savedQuestionResult.data.updateQuestion.infoIfCorrect || '',
    options: await saveOptions(questionId, question.options)
  });
  return result;
}

async function saveQuestionDetails(question) {
  const result = newQuestion(question.id, {
    topic: question.topic || '',
    text: question.text,
    infoIfCorrect: question.infoIfCorrect || '',
    options: await saveOptions(question.id, question.options)
  });
  return result;
}

async function saveOptions(questionId, options) {
  const result = [];
  for(let i = 0; i < options.length; i++) {
    const option = options[i];
    if(option.modification === 'remove') {
      if(!isNewId(option.id)) {
        await removeOption(option.id);
      }
    } else {
      const savedOption = option.modification === 'new'
      ? await saveNewOption(questionId, option)
      : option.modification === 'modified'
      ? await saveUpdatedOption(option)
      : newOption(option.id, {
        text: option.text,
        isCorrect: option.isCorrect
      });
      result.push(savedOption);
    }
  }
  return result;
}

async function saveNewOptions(questionId, options) {
  const result = [];
  for(let i = 0; i < options.length; i++) {
    if(options[i].modification !== 'remove') {
      const savedOption = await saveNewOption(questionId, options[i]);
      result.push(savedOption);
    }
  }
  return result;
}

async function saveUpdatedOption(option) {
  const savedOptionResult = await API.graphql(graphqlOperation(updateOption, {
    input: {
      id: option.id,
      text: option.text,
      isCorrect: option.isCorrect
    }
  }));
  return newOption(savedOptionResult.data.updateOption.id, {
    text: savedOptionResult.data.updateOption.text,
    isCorrect: savedOptionResult.data.updateOption.isCorrect
  });
}

async function saveNewOption(questionId, option) {
  const savedOptionResult = await API.graphql(graphqlOperation(createOption, {
    input: {
      text: option.text,
      isCorrect: option.isCorrect,
      optionQuestionId: questionId
    }
  }));
  return newOption(savedOptionResult.data.createOption.id, {
    text: savedOptionResult.data.createOption.text,
    isCorrect: savedOptionResult.data.createOption.isCorrect
  });
}

async function removeOption(optionId) {
  if(!isNewId(optionId)) {
    await API.graphql(graphqlOperation(deleteOption, {
      input: { id: optionId }
    }));
  }
}

async function removeQuestion(question) {
  if(!isNewId(question.id)) {
    for(let j = 0; j < question.options.length; j++) {
      removeOption(question.options[j].id);
    }
    await API.graphql(graphqlOperation(deleteQuestion, {
      input: { id: question.id }
    }));
  }
}