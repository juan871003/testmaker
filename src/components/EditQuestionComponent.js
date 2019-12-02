import React, { useState } from 'react';
import EditOption from './EditOptionComponent';
import { getMinId, newOption } from '../global/common';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

function EditQuestion(props) {
  // const question = props.question;
  // const topics = props.topics;
  const { question, topics, isExpand } = props;
  const NEWTOPIC = 'New Topic';
  const modes = {
    view: 'view',
    edit: 'edit'
  };

  const [tempTopic, setTempTopic] = useState('');
  const [mode, setMode] = useState(modes.view);

  function changeText(event) {
    props.editQuestion(question.id, 'text', event.target.value);
  }

  function changeTopic() {
    if (tempTopic.trim() !== '') {
      props.editQuestion(question.id, 'topic', tempTopic);
      setTempTopic('');
    }
    // props.editQuestion(question.id, 'topic', event.target.value);
  }

  function changeinfoIfCorrect(event) {
    props.editQuestion(question.id, 'infoIfCorrect', event.target.value);
  }

  function removeQuestion() {
    props.editQuestion(question.id, 'modification', 'remove');
  }

  function addOption() {
    const emptyOption = newOption(getMinId(question.options), { modification: 'new' });
    const newOptions = [...question.options, emptyOption];
    props.editQuestion(question.id, 'options', newOptions);
  }

  function editOptionHandler(optionId, property, value) {
    const index = question.options.findIndex(o => o.id === optionId);
    const nextOptions = [...question.options];
    nextOptions[index][property] = value;
    if (nextOptions[index].modification === 'none') {
      nextOptions[index].modification = 'modified';
    }
    props.editQuestion(question.id, 'options', nextOptions);
  }

  function topicSelectChange(e) {
    const val = e.target.value;
    if (val === NEWTOPIC) {
      props.editQuestion(question.id, 'topic', '');
    } else {
      props.editQuestion(question.id, 'topic', val);
    }
  }

  const editOptionsJsx = question.options
    .filter(o => o.modification !== 'remove')
    .map(o => (
      <InputGroup key={o.id} className='m-2'>
        <EditOption option={o} editOption={editOptionHandler} />
      </InputGroup>)
    )
  ;

  const editQuestionJsx =
    <Card className='m-3'>
      <Card.Header>
        <Form>
          <Form.Group controlId={`formQuestionText_${question.id}`}>
            <Form.Label>Question</Form.Label>
            <Form.Control
              as='textarea' rows='3'
              placeholder='Example: What came first, the chicken or the egg?'
              value={question.text}
              onChange={(event) => changeText(event)}
            />
          </Form.Group>
        </Form>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId={`formQuestionTopic_${question.id}`}>
            <Form.Label>Topic</Form.Label>
            <Form.Control as="select" onChange={topicSelectChange} value={question.topic === '' ? NEWTOPIC : question.topic}>
              <option key='New_Topic'>{NEWTOPIC}</option>
              {
                topics.map(t => <option key={t}>{t}</option>)
              }
            </Form.Control>
            {
              question.topic === '' &&
              <InputGroup>
                <Form.Control
                  placeholder='Example: Charles Darwin'
                  value={tempTopic}
                  onChange={(e) => setTempTopic(e.target.value)}
                />
                <InputGroup.Append>
                  <Button variant='outline-secondary' onClick={changeTopic}>Add</Button>
                </InputGroup.Append>
              </InputGroup>
            }
          </Form.Group>
          <Form.Group controlId={`formQuestionOptions_${question.id}`}>
            <Form.Label>Options</Form.Label>
            {editOptionsJsx}
          </Form.Group>
          <Form.Group controlId={`formQuestionInfoIfCorrect_${question.id}`}>
            <Form.Label>Message if question is answered correctly:</Form.Label>
            <Form.Control
              placeholder='Example: Good Work!'
              value={question.infoIfCorrect}
              onChange={(event) => changeinfoIfCorrect(event)}
            />
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button className='m-1' variant='primary' onClick={addOption}>Add Option</Button>
        <Button className='m-1' variant='danger' onClick={removeQuestion}>Remove Question</Button>
      </Card.Footer>
    </Card>
  ;

  const viewQuestionJsx =
    <Card className='m-3'>
      <Card.Header>
        <Card.Subtitle>{question.topic}</Card.Subtitle>
        <Card.Title className='mt-1'>{question.text}</Card.Title>
        <Button variant='outline-primary' className='float-right' onClick={() => setMode(modes.edit)}>Edit</Button>
      </Card.Header>
      {
        isExpand &&
        <Card.Body>
          <ListGroup>
            {
              question.options.map(o => <ListGroup.Item variant={o.isCorrect ? 'success' : 'danger'}>{o.text}</ListGroup.Item>)
            }
            
          </ListGroup>
        </Card.Body>
      }
    </Card>
  ;

  switch (mode) {
    case modes.view: return viewQuestionJsx;
    case modes.edit: return editQuestionJsx;
    default: return null;
  }

}


export default EditQuestion;
