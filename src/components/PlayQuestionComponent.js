import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PlayQuestion(props) {
  const question = props.question;
  const options = question.options;
  const isMultiAnswer = options.filter(o => o.isCorrect).length > 1;

  function onOptionChangeHandle(e) {
    // sometimes comparison is done between a number that needs casting and a string
    // eslint-disable-next-line eqeqeq
    const option = options.find(o => o.id == e.target.value);
    if(option !== undefined) {
      props.setOption(option.id, isMultiAnswer)
    }
    // e.preventDefault();
  }

  function getFeedbackJsx(optionId) {
    const option = options.find(o => o.id === optionId);
    if(question.isAnswered) {
      if(option.isSelected) {
        return (option.isCorrect ?
        <span className='xs-2' role='img' aria-labelledby='correct'>✅</span> :
        <span className='xs-2' role='img' aria-labelledby='incorrect'>❌</span>);
      } else if(isMultiAnswer) {
        return (option.isCorrect ?
          <span className='xs-2' role='img' aria-labelledby='incorrect'>❌</span> :
          <span className='xs-2' role='img' aria-labelledby='correct'>✅</span>);
      }
    }
    return null;
  }

  function getOptionsJsx() {
    return (
      <Form>
        {
          options.map(o => (
            <Container key={o.id}>
              <Row>
                <Col xs={1}>
                  { getFeedbackJsx(o.id) }
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check 
                      type={isMultiAnswer ? 'checkbox' : 'radio'}
                      name='questionoption' value={o.id} id={o.id}
                      onChange={onOptionChangeHandle}
                      checked={o.isSelected}
                      label={o.text}
                      className='xs-8'
                      disabled={question.isAnswered}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          ))
        }
      </Form>
    );
  }

  return (
    <Card>
      <Card.Header>
        Topic: {question.topic}
      </Card.Header>
      <Card.Body>
        <Card.Title>{question.text}</Card.Title>
        <Card.Text as='div'>
          { getOptionsJsx() }
          { 
            question.isAnswered && 
            question.infoIfCorrect.length > 0 &&
            !question.options.some(o => 
              (o.isCorrect && !o.isSelected) || (!o.isCorrect && o.isSelected)
            ) &&
            <p>{question.infoIfCorrect}</p>
          }
        </Card.Text>
          { 
            !question.isAnswered &&
            question.options.some(o => o.isSelected) &&
            <Card.Footer>
              <Button variant='primary' className='m-1' onClick={props.setAnswered}>Check Answer</Button>
            </Card.Footer>
          }
      </Card.Body>
    </Card>
  )
}

export default PlayQuestion;
