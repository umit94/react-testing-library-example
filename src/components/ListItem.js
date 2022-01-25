import React from "react";

export default function ListItem({ todoList, setTodoList, todoIndex }) {
  function setDone() {
    todoList[todoIndex].done = !todoList[todoIndex].done;
    setTodoList([...todoList]);
  }
  return (
    <div
      data-testid="list-item"
      style={{
        textDecoration: todoList[todoIndex].done ? "line-through" : "none",
        userSelect: "none",
      }}
      onClick={setDone}
    >
      {todoList[todoIndex].text}
    </div>
  );
}
