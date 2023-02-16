import TodoList from './components/TodoList';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';

function App() {
  const [pet, setPet] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [speciesInput, setSpeciesInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  
  const onNameInputChange = useCallback((e) => {
    setNameInput(e.target.value);
  }, []);
  const onAgeInputChange = useCallback((e) => {
    setAgeInput(e.target.value);
  }, []);
  const onSpeciesInputChange = useCallback((e) => {
    setSpeciesInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      setPet([
        { id: v4(), name: nameInput, species: speciesInput, age : ageInput, isDelete: false },
        ...pet,
      ]);
      setTextInput('');
    },
    [textInput, todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  return (
    <>
      <h3>Pets list!</h3>
      <Textfield
        name='add-name'
        placeholder='Name...'
        css={{ padding: '2px 4px 2px' }}
        value={nameInput}
        onChange={onNameInputChange}
      ></Textfield>
      <Textfield
        name='add-species'
        placeholder='Species...'
        css={{ padding: '2px 4px 2px' }}
        value={speciesInput}
        onChange={onSpeciesInputChange}
      ></Textfield>
      <Textfield
        name='add-age'
        placeholder='Age...'
        css={{ padding: '2px 4px 2px' }}
        value={ageInput}
        onChange={onAgeInputChange}
      ></Textfield>
          <Button
            isDisabled={!textInput}
            appearance='primary'
            onClick={onAddBtnClick}
          >
            Add
          </Button>
      <TodoList pet={pet} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
