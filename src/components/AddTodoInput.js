import React, { useRef } from "react";

export default function AddTodoInput({ setTodoList, todoList }) {
  const inputRef = useRef();
  function addTodo() {
    const newTodo = { text: inputRef.current.value, done: false };
    todoList.push(newTodo);
    setTodoList([...todoList]);
  }
  return (
    <div>
      <input placeholder="Type a Todo" ref={inputRef} type="text" />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
