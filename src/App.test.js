import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.js";

describe("app test", () => {
  test("new todo should be added after clicking add button", () => {
    render(<App />);
    const todoInputElement = screen.getByPlaceholderText("Type a Todo");
    const todoAddButtonElement = screen.getByText("Add");
    //we add a few(random between 1-10) new todos
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < randomNumber; i++) {
      fireEvent.change(todoInputElement, {
        target: { value: `deneme ${i}` },
      });
      fireEvent.click(todoAddButtonElement);
    }
    //no need to rerender, because App has a state change, and it is rerendered already
    const listItemElement = screen.getAllByTestId("list-item");
    expect(listItemElement.length).toBe(randomNumber);
    //we check all listItems
    for (let i = 0; i < randomNumber; i++) {
      expect(listItemElement[i].innerHTML).toBe(`deneme ${i}`);
    }
  });
  test("empty todoList should be rendered", () => {
    render(<App />);
  });
});
