import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import PlayQuestion from './PlayQuestionComponent';
import { shuffleQuestions, shuffleOptions } from '../global/common';

function PlayTest(props) {
  // [s]huffled[q]uestions
  const [sQuestions, setSQuestions] = useState([]);
  // const [wQuestions, setWQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if(props.test !== null) {
      setSQuestions(shuffleQuestionsLocal(props.test.questions));
    }
  }, [props.test]);

  if(props.test === null) { return null; }

  function setOptionHandle(optionId, isMultiAnswer) {
    const questions = [...sQuestions];
    const options = questions[index].options;
    options.forEach(o => {
      if(o.id === optionId) {
        o.isSelected = isMultiAnswer ? !o.isSelected : true;
      } else if(!isMultiAnswer) {
        o.isSelected = false;
      }
    });
    setSQuestions(questions);
  }

  function setAnsweredHandle() {
    let questions = [...sQuestions];
    const question = questions[index]; 
    question.isAnswered = true;
    const isAnswerWrong = question.options.some(o => 
      (o.isCorrect && !o.isSelected) || (!o.isCorrect && o.isSelected)
    );
    if(isAnswerWrong) {
      const nextQuestion = JSON.parse(JSON.stringify(question));
      nextQuestion.options.forEach(o => o.isSelected = false);
      nextQuestion.isAnswered = false;
      nextQuestion.options = shuffleOptions(nextQuestion.options);
      questions.push(nextQuestion);
    }
    setSQuestions(questions);
  }

  return (
    <div>
       <Badge variant='secondary'>{sQuestions.length - index} questions left</Badge>
      <Card>
        <Card.Body>
          {
            index < sQuestions.length &&
            <PlayQuestion question={sQuestions[index]} setOption={setOptionHandle} setAnswered={setAnsweredHandle} />
          }
          {
            index < sQuestions.length - 1 &&
            sQuestions[index].isAnswered &&
            <Button className='m-1' variant='primary' onClick={() => setIndex(index + 1)}>Next</Button>
          }
        </Card.Body>
      </Card>
      <Button className='m-1' variant='secondary' onClick={props.goBack}>Home</Button>
    </div>
  )
}

function shuffleQuestionsLocal(questions) {
  const shuffled = shuffleQuestions(questions);
  shuffled.map(q => q.options = shuffleOptions(q.options));
  return shuffled;
}

export default PlayTest;
