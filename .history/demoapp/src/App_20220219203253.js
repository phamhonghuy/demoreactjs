import Todolist from "./components/Todolist";
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'

function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield name="add-todo" placeholder="Thêm việc cần làm..." elemAfterInput={}
      <Button >Thêm</Button>
      "></Textfield>
    </>
  );
}

export default App;
