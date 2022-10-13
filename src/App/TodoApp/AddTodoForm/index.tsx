import React, { useState } from "react";
import { Field, Label, Input } from "@zendeskgarden/react-forms";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Button } from "@zendeskgarden/react-buttons";
import styled from "styled-components";
import { AddTodo } from "../types";

interface Props {
  addTodo: AddTodo;
}

const StyledRow = styled(Row)`
  ${({ theme }) => `
  border: 1px ${theme.palette.grey["300"]} solid;
  padding: ${theme.space.sm};
  margin: ${theme.space.lg}; 
  border-radius: ${theme.space.xxs};
  `}
`;

const StyledLabel = styled(Label)`
  text-align: left;
`;

const StyledLabelCol = styled(Col)`
  margin: auto;
`;

const StyledButtonCol = styled(Col)`
  margin: auto;
  margin-bottom: 0px;
`;

const TodoForm = React.memo<Props>(({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <StyledRow justifyContent="center">
      <StyledLabelCol sm={4}>
        <Field>
          <StyledLabel>Name</StyledLabel>
          <Input
            placeholder="Enter Todo"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </Field>
      </StyledLabelCol>
      <StyledButtonCol textAlign="center" sm={4}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
        >
          Add Todo
        </Button>
      </StyledButtonCol>
    </StyledRow>
  );
});

export default TodoForm;
