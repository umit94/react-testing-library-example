import { render, screen } from "@testing-library/react";
import List from "../List.js";

const defaultProps = {
  todoList: [
    { done: false, text: "test text" },
    { done: false, text: "test text" },
  ],
  setTodoList: () => {},
};

test("should have items as much as todoList prop length", () => {
  render(<List {...defaultProps} />);
  const listItemElementArray = screen.getAllByTestId("list-item");
  expect(listItemElementArray.length).toBe(defaultProps.todoList.length);
});
