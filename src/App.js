import React, { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// import { onCreateTest } from './graphql/subscriptions';
import EditTest from './components/EditTestComponent';
import PlayTest from './components/PlayTestComponent';
import { getMinId, newTest, isNewId, newQuestion, newOption } from './global/common';
import { getAllTests, saveTestsChanges, removeTest } from './global/crudTest';
import { data as rawdata } from './data';

const modes = {
  LISTTESTS: 'listtests',
  // ADDTEST: 'addtest',
  EDITTEST: 'edittest',
  PLAYTEST: 'playtest'
}

function App() {
  const [tests, setTests] = useState([]);
  const [processMsg, setProcessMsg] = useState('');
  const [mode, setMode] = useState(modes.LISTTESTS);
  const [selectedTest, setSelectedTest] = useState(null);

  useEffect(() => {
    getTests();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update 'selectedtest' after 'tests' have been updated
  // otherwise 'selectedtest' would be pointing to old copy of test
  /* useEffect(() => {
    if(selectedTest !== null) {
      const test = tests.find(t => t.id === selectedTest.id);
      if(test !== undefined) {
        setSelectedTest(test);
      } else {
        setSelectedTest(null);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tests]); */

  /* useEffect(() => {
    const listeners = [];
    listeners.push(subscribeOnCreateTest());
    return () => {
      listeners.forEach(l => l && l.unsubscribe && l.unsubscribe());
    }
  }) */

  /* async function subscribeOnCreateTest() {
    const user = await Auth.currentAuthenticatedUser();
    const listener = API.graphql(graphqlOperation(onCreateTest, { owner: user.username })).subscribe({
      next: noteData => {
        const newTest = noteData.value.data.onCreateTest;
        setTests(prevTests => {
            const index = prevTests.findIndex(test => test.id === newTest.id);
            if( index >= 0 ) {
              const updatedTests = [...prevTests];
              updatedTests[index] = newTest;
              return updatedTests;
            } else {
              return [newTest, ...prevTests];
            }
        });
        setProcessMsg('');
      }
    });
    return listener;
  } */

  async function getTests() {
    setProcessMsg('Loading tests...');
    const result = await getAllTests();
    // const result = getJsonTests();
    if(result !== null) {
      setTests(result);
      setProcessMsg('');
    } else {
      setProcessMsg('Please check your Internet connection');
    }
  }

  function addTest() {
    const emptyTest = newTest(getMinId(tests), { modification: 'new' });
    setTests(prevTests => [...prevTests, emptyTest]);
    setSelectedTest(emptyTest);
    setMode(modes.EDITTEST);
  }

  function selectPlayTest(test) {
    setSelectedTest(test);
    setMode(modes.PLAYTEST);
  }

  function selectEditTest(test) {
    setSelectedTest(test);
    setMode(modes.EDITTEST);
  }

  function editTestHandler(testId, property, value) {
    setTests(prevTests => {
      const index = prevTests.findIndex(t => t.id === testId);
      if(index >= 0) {
        const nextTests = [...prevTests];
        nextTests[index][property] = value;
        if(nextTests[index].modification === 'none') {
          nextTests[index].modification = 'modified';
        }
        return nextTests; 
      }
      return prevTests;
    });
  }

  function askDeleteTest(testId) {
    setTests(prevTests => {
      const nextTests = [...prevTests];
      const nextTest = nextTests.find(t => t.id === testId);
      if(nextTest !== undefined) {
        nextTest.modification = 'askDelete';
        return nextTests;
      }
      return prevTests;
    });
  }

  function deleteTest(test) {
    if(!isNewId(test.id)) {
      removeTest(test);
    }
    setTests(prevTests => prevTests.filter(t => t.id !== test.id));
  }

  function undoDeleteTest(test) {
    setTests(prevTests => {
      const nextTests = [...prevTests];
      const nextTest = nextTests.find(t => t.id === test.id);
      if(nextTest !== undefined) {
        nextTest.modification = 'modified';
        return nextTests;
      }
      return prevTests;
    });
  }

  function checkIsDirty() {
    return tests.some(t => t.modification !== 'none' 
      || t.questions.some(q => q.modification !== 'none'
        || q.options.some(o => o.modification !== 'none')
      )
    );
  }

  async function saveChanges() {
    setProcessMsg('Saving Changes');
    //setTests(prevTests => await saveTestsChanges(prevTests));
    const newTests = await saveTestsChanges(tests);
    setTests(newTests);
    setProcessMsg('Changes Saved');
  }

  function goHome() {
    setMode(modes.LISTTESTS);
    setSelectedTest(null);
  }

  function getJsonTests() {
    const newTests = rawdata.questionnaires.map(
      (t, index) => newTest((index + 1) * -1, {
          title: t.title,
          questions: getJsonQuestions(t.questions, index),
          modification: 'none'
        } 
      )
    );
    return newTests;
  }

  function getJsonQuestions(questions, testIndex) {
    return questions.map(
      (q, index) => newQuestion( (((testIndex + 1) * 10) + (index + 1)) * -1, {
        topic: q.topic || '',
        text: q.question,
        infoIfCorrect: q.infoIfCorrect || '',
        options: getJsonOptions(q.options, testIndex, index),
        modification: 'none'
      })
    );
  }

  function getJsonOptions(options, testIndex, questionIndex) {
    function getId(index) {
      return (((testIndex + 1) * 100) + ((questionIndex + 1) * 10) + (index + 1)) * -1;
    }
    return options.map(
      (o, index) => newOption(getId(index), {
        text: o.text,
        isCorrect: o.isCorrect,
        modification: 'none'
      })
    );
  }

  function listTestsJsx() {
    const testsItemsJsx = tests.map( test => {
     return (
      <Card className='mb-1' key={test.id}>
        <Card.Body>
          <Card.Title>{test.title}</Card.Title>
          <Card.Text>{test.questions.length} Questions</Card.Text>
          <ButtonToolbar>
            <Button className='m-1' variant='success' onClick={() => selectPlayTest(test)}>Play</Button>
            <Button className='m-1' variant='primary' onClick={() => selectEditTest(test)}>Edit</Button>
            { 
              test.modification !== 'askDelete' ? 
              <Button className='m-1' variant='warning' onClick={() => askDeleteTest(test.id)}>Remove</Button> :
              <p>This test has {test.questions.length} questions, are you sure you want to remove it?
              <Button className='m-1' variant='info' onClick={() => deleteTest(test)}>Yes</Button>
              <Button className='m-1' variant='info' onClick={() => undoDeleteTest(test)}>No</Button>
              </p>
            }
          </ButtonToolbar>
        </Card.Body>
      </Card>
     );
    })
    return (
      <div>
        { testsItemsJsx }
        <Button className='m-1' variant='primary' onClick={addTest}>Add Test</Button>
      </div>
    );
  }

  function getContent() {
    switch(mode) {
      case modes.LISTTESTS:
        return listTestsJsx();
      case modes.EDITTEST:
        return <EditTest 
          test={selectedTest} 
          editTest={editTestHandler}
          goBack={goHome}
          saveChanges={saveChanges}
          checkIsDirty={() => checkIsDirty()}
           />;
      case modes.PLAYTEST:
        return <PlayTest test={selectedTest} goBack={goHome} />
      default:
        return null;
    }
  }

  return (
    <Container>
      <div className='mb-5'></div>
      <h2>{ processMsg }</h2>
      { getContent() }
      {
        checkIsDirty() &&
        <Button className='m-1' variant='success' block onClick={saveChanges}>Save Changes</Button>
      }
    </Container>
  ); 
}

export default withAuthenticator(App);
