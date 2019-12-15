import React, { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import EditTest from './components/EditTestComponent';
import PlayTest from './components/PlayTestComponent';
import { getMinId, newTest, isNewId } from './global/common';
import { getAllTests, saveTestsChanges, removeTest } from './global/crudTest';

const modes = {
  LISTTESTS: 'listtests',
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
    const result = await getAllTests(document.URL);
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
    setTests(prevTests => prevTests.map(
      t => t.id === testId ?
      {
        ...t, 
        [property]: value, 
        modification: t.modification === 'none' ?
          'modified' : t.modification
      } : t
    ));
  }

  function askDeleteTest(testId) {
    setTests(prevTests =>
      prevTests.map( t => 
        t.id === testId ? 
        {...t, modification: 'askDelete'} : t)
    );
  }

  function deleteTest(test) {
    if(!isNewId(test.id)) {
      removeTest(test);
    }
    setTests(prevTests => prevTests.filter(t => t.id !== test.id));
  }

  function undoDeleteTest(test) {
    setTests(prevTests => 
      prevTests.map(
        t => t === test.id ? 
        {...t, modification: 'modified'} : t)
    );
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
    if(selectedTest !== null) {
      setSelectedTest(prevTest => 
        newTests.find(t => t.id === prevTest.id) || null
      );
    }
    setProcessMsg('Changes Saved');
  }

  function goHome() {
    setMode(modes.LISTTESTS);
    setSelectedTest(null);
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

const application = document.URL.indexOf('localhost') >= 0 ? App : withAuthenticator(App);

export default application;
