import Todolist from "./components/Todolist";
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'
import { useState } from "react";

function App() {
  const [todoList, setTodoList]= useState([]);
  const [textInput, setTextInput]= useState('');
  const onTextInputChange = () => {
    setTextInput(e.target.value);
  };
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield name="add-todo" placeholder="Thêm việc cần làm..." elemAfterInput={
        <Button isDisabled={true} appearance='primary' onChange={onAddBt}>Thêm</Button>
      }
      css={{padding: "2px 4px 2px"}}
      value={textInput}
      onChange={onTextInputChange}
      ></Textfield>
      <Todolist/>
    </>
  );
}

export default App;
