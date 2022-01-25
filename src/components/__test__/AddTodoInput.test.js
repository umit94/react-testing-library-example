import { screen, render, fireEvent } from "@testing-library/react";
import AddTodoInput from "../AddTodoInput.js";

test("Add new todo", () => {
  let mockTodoList = [];
  render(<AddTodoInput todoList={mockTodoList} setTodoList={() => {}} />); //setTodoList just sets the state
  const inputElement = screen.getByPlaceholderText("Type a Todo");
  const buttonElement = screen.getByText("Add");
  fireEvent.change(inputElement, { target: { value: "random todo" } }); //Input's value changed by firing event
  fireEvent.click(buttonElement); //Click event is fired to run the button's onClick callback function

  //My button's onClick callback function pushes an object that includes 'done' and 'text' fields to an array.
  // and the text field should be equal to input's value
  // done field is always false
  expect(mockTodoList[mockTodoList.length - 1].done).toBe(false);
  expect(mockTodoList[mockTodoList.length - 1].text).toBe("random todo");
});
