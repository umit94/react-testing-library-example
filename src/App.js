import { useState } from "react";
import AddTodoInput from "./components/AddTodoInput.js";
import List from "./components/List.js";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <AddTodoInput todoList={todoList} setTodoList={setTodoList} />
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
