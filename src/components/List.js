import React from "react";
import ListItem from "./ListItem.js";

export default function List({ todoList, setTodoList }) {
  return (
    <div>
      {todoList.map((_, todoIndex) => (
        <ListItem
          todoList={todoList}
          todoIndex={todoIndex}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
