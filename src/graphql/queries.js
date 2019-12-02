/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTest = `query GetTest($id: ID!) {
  getTest(id: $id) {
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
export const listTests = `query ListTests(
  $filter: ModelTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      questions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
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
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getOption = `query GetOption($id: ID!) {
  getOption(id: $id) {
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
export const listOptions = `query ListOptions(
  $filter: ModelOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      isCorrect
      question {
        id
        text
        topic
        infoIfCorrect
        questionTestId
      }
      optionQuestionId
    }
    nextToken
  }
}
`;
