import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function EditOption(props) {
  const option = props.option;

  function changeText(event) {
    props.editOption(option.id, 'text', event.target.value);
  }

  function toogleIsCorrect() {
    props.editOption(option.id, 'isCorrect', !option.isCorrect);
  }

  function removeOption() {
    props.editOption(option.id, 'modification', 'remove');
  }

  return (
    <>
      <InputGroup.Prepend>
        <InputGroup.Checkbox 
          onChange={toogleIsCorrect}
          checked={option.isCorrect}
        />
      </InputGroup.Prepend>
      <FormControl 
        placeholder='Example: The Egg, laid by a semi-chicken'
        value={option.text}
        onChange={(event) => changeText(event)}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={removeOption}>Remove</Button>
      </InputGroup.Append>
    </>
  );
}

export default EditOption;
