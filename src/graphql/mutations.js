/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTest = `mutation CreateTest($input: CreateTestInput!) {
  createTest(input: $input) {
    id
    title
    questions {
      items {
        id
        text
        topic
        infoIfCorrect
        questionTestId
      }
      nextToken
    }
  }
}
`;
export const updateTest = `mutation UpdateTest($input: UpdateTestInput!) {
  updateTest(input: $input) {
    id
    title
    questions {
      items {
        id
        text
        topic
        infoIfCorrect
        questionTestId
      }
      nextToken
    }
  }
}
`;
export const deleteTest = `mutation DeleteTest($input: DeleteTestInput!) {
  deleteTest(input: $input) {
    id
    title
    questions {
      items {
        id
        text
        topic
        infoIfCorrect
        questionTestId
      }
      nextToken
    }
  }
}
`;
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
    id
    text
    topic
    infoIfCorrect
    options {
      items {
        id
        text
        isCorrect
        optionQuestionId
      }
      nextToken
    }
    test {
      id
      title
      questions {
        nextToken
      }
    }
    questionTestId
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
    id
    text
    topic
    infoIfCorrect
    options {
      items {
        id
        text
        isCorrect
        optionQuestionId
      }
      nextToken
    }
    test {
      id
      title
      questions {
        nextToken
      }
    }
    questionTestId
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
    id
    text
    topic
    infoIfCorrect
    options {
      items {
        id
        text
        isCorrect
        optionQuestionId
      }
      nextToken
    }
    test {
      id
      title
      questions {
        nextToken
      }
    }
    questionTestId
  }
}
`;
export const createOption = `mutation CreateOption($input: CreateOptionInput!) {
  createOption(input: $input) {
    id
    text
    isCorrect
    question {
      id
      text
      topic
      infoIfCorrect
      options {
        nextToken
      }
      test {
        id
        title
      }
      questionTestId
    }
    optionQuestionId
  }
}
`;
export const updateOption = `mutation UpdateOption($input: UpdateOptionInput!) {
  updateOption(input: $input) {
    id
    text
    isCorrect
    question {
      id
      text
      topic
      infoIfCorrect
      options {
        nextToken
      }
      test {
        id
        title
      }
      questionTestId
    }
    optionQuestionId
  }
}
`;
export const deleteOption = `mutation DeleteOption($input: DeleteOptionInput!) {
  deleteOption(input: $input) {
    id
    text
    isCorrect
    question {
      id
      text
      topic
      infoIfCorrect
      options {
        nextToken
      }
      test {
        id
        title
      }
      questionTestId
    }
    optionQuestionId
  }
}
`;
