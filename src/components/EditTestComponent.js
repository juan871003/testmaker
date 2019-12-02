import React, { useState } from 'react';
import EditQuestion from './EditQuestionComponent';
import { getMinId, newQuestion } from '../global/common';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function EditTest(props) {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isExpand, setIsExpand] = useState(false);
  if(props.test === null) { return null; }
  const { id, title, questions } = props.test;
  const topics = [...new Set(questions.map(q => q.topic))];

  function changeTitle(event) {
    props.editTest(id, 'title', event.target.value);
  }

  function addQuestion() {
    const emptyQuestion = newQuestion(getMinId(questions), { modification: 'new' });
    props.editTest(id, 'questions', [emptyQuestion, ...questions]);
  }

  function editQuestionHandler(questionid, property, value) {
    const index = questions.findIndex(q => q.id === questionid);
    const nextQuestions = [...questions];
    nextQuestions[index][property] = value;
    if(nextQuestions[index].modification === 'none') {
      nextQuestions[index].modification = 'modified';
    }
    props.editTest(id, 'questions', nextQuestions);
  }

  const questionsJsx = questions
    .filter(q => q.modification !== 'remove')
    .filter(q => selectedTopic === '' || q.topic === selectedTopic)
    .map(q => <EditQuestion 
        key={q.id} 
        question={q} 
        editQuestion={editQuestionHandler}
        topics={topics}
        isExpand={isExpand} />
    )
  ;

  return (
    <div>
      <Button className='m-1' variant='primary' onClick={props.goBack}>Home</Button>
      <Card className='mb-5 mt-2' border='primary'>
        <Card.Header className='text-center'><h1>Test Details</h1></Card.Header>
        <Card.Body>
          <Card.Title>
            <Form>
              <Form.Group controlId='formTestTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  placeholder='My awesome test' 
                  size='lg' 
                  value={title} 
                  onChange={(event) => changeTitle(event)}
                />
              </Form.Group>
            </Form>
          </Card.Title>
          <Card.Text as='div'>
            <p>{questions.length} Questions</p>
            {
              topics.length > 1 &&
              <Form>
                <Form.Group controlId='formTestTopicsFilter'>
                  <Form.Label>Filter by topic</Form.Label>
                  <Form.Control 
                    as='select'
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}>
                    <option key='no_topic'></option>
                    {
                      topics.map(t => <option key={t}>{t}</option>)
                    }
                  </Form.Control>
                </Form.Group>
              </Form>
            }
          </Card.Text>
        </Card.Body>
          <Card.Footer>
            <Container>
              <Row>
                <Col>
                  <Button className='m-3' variant='primary' onClick={addQuestion}>Add Question</Button>
                </Col>
                <Col>
                  {
                    props.checkIsDirty() &&
                    <Button className='m-3' variant='success' onClick={props.saveChanges}>Save Changes</Button>
                  }
                </Col>
              </Row>
            </Container>
          </Card.Footer>
      </Card>
      {
        questions.length > 0 &&
        <Button variant='outline-info' onClick={() => setIsExpand(prevIsExpand => !prevIsExpand)}>{isExpand ? 'Collapse' : 'Expand'}</Button>
      }
      { questionsJsx }
    </div>
  );
}

export default EditTest;
