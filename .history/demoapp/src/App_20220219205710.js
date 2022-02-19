import Todolist from "./components/Todolist";
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'
import { useState } from "react";

function App() {
  count [todoList, setTodoList]= useState([]);
  count [textInput, setTextInput]= useState('');
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield name="add-todo" placeholder="Thêm việc cần làm..." elemAfterInput={
        <Button isDisabled={true} appearance='primary'>Thêm</Button>
      }
      css={{padding: "2px 4px 2px"}}
      
      ></Textfield>
      <Todolist/>
    </>
  );
}

export default App;
