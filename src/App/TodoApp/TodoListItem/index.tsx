import React from "react";
import { Button } from "@zendeskgarden/react-buttons";
import { Row, Col } from "@zendeskgarden/react-grid";
import styled from "styled-components";
import { Todo, CompleteTodo, DeleteTodo } from "../types";

interface TodoListItemProps {
  todo: Todo;
  completeTodo: CompleteTodo;
  deleteTodo: DeleteTodo;
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
  ({ todo, completeTodo, deleteTodo }) => {
    return (
      <StyledRow>
        <StyledCol
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
        >
          {todo.text}
        </StyledCol>
        <StyledCol>
          <Button>Edit</Button>
        </StyledCol>
        <StyledCol>
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
