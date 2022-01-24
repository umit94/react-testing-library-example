import { render, screen } from "@testing-library/react";
import ListItem from "../ListItem.js";
const defaultProps = {
  todoList: [{ done: false, text: "test text" }],
  setTodoList: () => {},
  todoIndex: 0,
};

test("get", () => {
  render(<ListItem {...defaultProps} />);
  const anElement = screen.getByRole("document");
  expect(anElement).toBeInTheDocument();
});

//find is for async test
test("find", async () => {
  render(<ListItem {...defaultProps} />);
  const anElement = await screen.findByRole("document");
  expect(anElement).toBeInTheDocument();
});

//query is to not get an error if the element doesnt exist
test("query", () => {
  render(<ListItem {...defaultProps} />);
  const anElement = screen.queryByRole("randomRole"); //prevents getting error in this line
  expect(anElement).not.toBeInTheDocument(); //query wont prevent error if we get error in this line
  //i used 'not' because i dont want to get an error
});

describe("listItem", () => {
  //'describe' organizes tests
  test("textDecoration should be line-through", () => {
    render(
      <ListItem
        {...defaultProps}
        todoList={[{ done: true, text: "test text" }]}
      />
    );
    const listItem = screen.getByRole("document");
    expect(listItem).toHaveStyle("text-decoration:line-through");
  });

  test("innerText should be equal to todoList[todoIndex].text", () => {
    render(<ListItem {...defaultProps} />);
    const listItem = screen.getByRole("document");
    expect(listItem.textContent).toBe(
      defaultProps.todoList[defaultProps.todoIndex].text
    );
  });
});
