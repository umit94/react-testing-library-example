import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ListItem from "../ListItem.js";
const defaultProps = {
  todoList: [{ done: false, text: "test text" }],
  setTodoList: () => {},
  todoIndex: 0,
};

test("get", () => {
  render(<ListItem {...defaultProps} />);
  const anElement = screen.getByTestId("list-item");
  expect(anElement).toBeInTheDocument();
});

//find is for async test
test("find", async () => {
  render(<ListItem {...defaultProps} />);
  const anElement = await screen.findByTestId("list-item");
  expect(anElement).toBeInTheDocument();
});

//query is to not get an error if the element doesnt exist
test("query", () => {
  render(<ListItem {...defaultProps} />);
  const anElement = screen.queryByTestId("random-unexistent-id"); //prevents getting error in this line
  expect(anElement).not.toBeInTheDocument(); //query wont prevent error if we get error in this line
  //i used 'not' because i dont want to get an error
});

describe("listItem before click", () => {
  //'describe' organizes tests
  test("textDecoration should be none", () => {
    render(
      <ListItem
        {...defaultProps}
        todoList={[{ done: false, text: "test text" }]}
      />
    );
    const listItem = screen.getByTestId("list-item");
    expect(listItem).toHaveStyle("text-decoration:none");
  });

  test("innerText should be equal to todoList[todoIndex].text", () => {
    render(<ListItem {...defaultProps} />);
    const listItem = screen.getByTestId("list-item");
    expect(listItem.textContent).toBe(
      defaultProps.todoList[defaultProps.todoIndex].text
    );
  });
});

describe("listItem onClick", () => {
  let myProps = {
    todoList: [{ done: false, text: "test text" }],
    setTodoList: () => {},
    todoIndex: 0,
  };
  test("todoList's done field should change to true after click", () => {
    render(<ListItem {...myProps} />);
    const listItem = screen.getByTestId("list-item");
    fireEvent.click(listItem);
    expect(myProps.todoList[myProps.todoIndex].done).toBe(true);
  });

  test("textDecoration should be line-through", () => {
    render(<ListItem {...myProps} />);
    const listItem = screen.getByTestId("list-item");
    expect(listItem).toHaveStyle("text-decoration:line-through");
  });

  test("innerText should be equal to todoList[todoIndex].text", () => {
    render(<ListItem {...myProps} />);
    const listItem = screen.getByTestId("list-item");
    expect(listItem.textContent).toBe(myProps.todoList[myProps.todoIndex].text);
  });
});

test("listItem onClick with rerender", () => {
  //same test as above but with rerender
  let myProps = {
    todoList: [{ done: false, text: "test text" }],
    setTodoList: () => {},
    todoIndex: 0,
  };
  const { rerender } = render(<ListItem {...myProps} />);
  const listItem = screen.getByTestId("list-item");
  expect(listItem).toHaveStyle("text-decoration:none");
  fireEvent.click(listItem); //on click's callback function changes props, so component should rerender
  rerender(<ListItem {...myProps} />);
  expect(listItem).toHaveStyle("text-decoration:line-through");
});
