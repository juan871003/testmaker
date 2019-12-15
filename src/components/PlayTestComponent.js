import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

import PlayQuestion from './PlayQuestionComponent';
import { shuffleArr } from '../global/common';

function PlayTest(props) {
  // [s]huffled[q]uestions
  const [sQuestions, setSQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState('');

  useEffect(() => {
    if (props.test !== null) {
      setIndex(0);
      const questions = JSON.parse(JSON.stringify(
        props.test.questions.filter(q =>
          selectedTopic === '' || q.topic === selectedTopic
        )
      ));
      setSQuestions(shuffleQuestions(questions));
    }
  }, [props.test, selectedTopic]);

  if (props.test === null) { return null; }

  const topics = [...new Set(['', ...props.test.questions.map(q => q.topic)])];

  function setOptionHandle(optionId, isMultiAnswer) {
    const questions = [...sQuestions];
    const options = questions[index].options;
    options.forEach(o => {
      if (o.id === optionId) {
        o.isSelected = isMultiAnswer ? !o.isSelected : true;
      } else if (!isMultiAnswer) {
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
    if (isAnswerWrong) {
      const nextQuestion = JSON.parse(JSON.stringify(question));
      nextQuestion.options.forEach(o => o.isSelected = false);
      nextQuestion.isAnswered = false;
      nextQuestion.options = shuffleArr(nextQuestion.options);
      questions.push(nextQuestion);
    }
    setSQuestions(questions);
  }

  return (
    <div>
      <Badge variant='secondary'>{sQuestions.length - index} questions left</Badge>
      <Card>
        {
          topics.length > 1 &&
          <Card.Header>
            <Form>
              <Form.Group controlId='formTestPlayTopicsFilter'>
                <Form.Label>Filter by topic</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}>
                  {
                    topics.map(t => <option key={t === '' ? 'no_topic' : t}>{t}</option>)
                  }
                </Form.Control>
              </Form.Group>
            </Form>
          </Card.Header>
        }
        <Card.Body>
          {
            sQuestions.length > 0 &&
            index < sQuestions.length &&
            <PlayQuestion question={sQuestions[index]} setOption={setOptionHandle} setAnswered={setAnsweredHandle} />
          }
          {
            index < sQuestions.length - 1 &&
            sQuestions[index].isAnswered &&
            <Button className='m-1' variant='primary' onClick={() => setIndex(index + 1)}>Next</Button>
          }
          {
            sQuestions.length === 0 &&
            <p>There is no more unanswered questions</p>
          }
        </Card.Body>
      </Card>
      <Button className='m-1' variant='secondary' onClick={props.goBack}>Home</Button>
    </div>
  )
}

function shuffleQuestions(questions) {
  const shuffled = shuffleArr(questions);
  shuffled.map(q => q.options = shuffleArr(q.options));
  return shuffled;
}

export default PlayTest;
