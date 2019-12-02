/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTest = `subscription OnCreateTest {
  onCreateTest {
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
export const onUpdateTest = `subscription OnUpdateTest {
  onUpdateTest {
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
export const onDeleteTest = `subscription OnDeleteTest {
  onDeleteTest {
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
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
export const onCreateOption = `subscription OnCreateOption {
  onCreateOption {
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
export const onUpdateOption = `subscription OnUpdateOption {
  onUpdateOption {
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
export const onDeleteOption = `subscription OnDeleteOption {
  onDeleteOption {
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
