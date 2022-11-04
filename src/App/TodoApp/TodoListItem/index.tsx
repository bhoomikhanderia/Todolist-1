import React, { useState } from "react";
import { Button } from "@zendeskgarden/react-buttons";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Field, Input } from "@zendeskgarden/react-forms";
import styled from "styled-components";
import { Todo, CompleteTodo, DeleteTodo, UpdateTodo, AddTodo } from "../types";

interface TodoListItemProps {
  todo: Todo;
  completeTodo: CompleteTodo;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
  addTodo: AddTodo;
}

const StyledRow = styled(Row)`
  ${({ theme }) => `
  padding: ${theme.space.sm};
  margin: ${theme.space.lg}; 
  border-radius: ${theme.space.xxs};
  `}
`;

const StyledCol = styled(Col)`
  margin: auto;
`;

const TodoListItem = React.memo<TodoListItemProps>(
  ({ todo, completeTodo, deleteTodo, updateTodo, addTodo }) => {
    const [edit, setEdit] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    if (edit) {
      return (
        <StyledRow justifyContent="center">
          <StyledCol sm={4}>
            <Field>
              <Input
                className="input"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Edit Todo"
              />
            </Field>
          </StyledCol>
          <StyledCol>
            <Button
              onClick={(e) => {
                e.preventDefault();
                updateTodo(newText, todo.id);
                setEdit(false);
              }}
            >
              Update Todo
            </Button>
          </StyledCol>
          <StyledCol>
            {" "}
            <Button
              isDanger
              onClick={(e) => {
                e.preventDefault();
                setEdit(false);
              }}
            >
              Cancel
            </Button>
          </StyledCol>
        </StyledRow>
      );
    }

    return (
      <StyledRow>
        <StyledCol
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
        >
          {todo.text}
        </StyledCol>
        <StyledCol textAlign="center" sm={4}>
          <Button onClick={() => setEdit(true)}>Edit</Button>
        </StyledCol>
        <StyledCol textAlign="center" sm={4}>
          <Button
            isPrimary
            onClick={() => {
              completeTodo(todo);
            }}
          >
            {todo.complete ? "Completed" : "Complete"}
          </Button>
        </StyledCol>
        <StyledCol>
          <Button
            isDanger
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete
          </Button>
        </StyledCol>
      </StyledRow>
    );
  }
);

export default TodoListItem;
