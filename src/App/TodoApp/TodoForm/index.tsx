import React from "react";
import { Field, Label, Input } from "@zendeskgarden/react-forms";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Button } from "@zendeskgarden/react-buttons";
import { Well } from "@zendeskgarden/react-notifications";
import styled from "styled-components";

const Container = styled(Well)`
  margin: ${({ theme }) => theme.space.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.foreground};
`;

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

const TodoForm = React.memo(() => {
  return (
    // <Container isFloating>
    <StyledRow justifyContent="center">
      <StyledLabelCol sm={4}>
        <Field>
          <StyledLabel>Name</StyledLabel>
          <Input placeholder="Enter Todo" />
        </Field>
      </StyledLabelCol>
      <StyledButtonCol textAlign="center" sm={4}>
        <Button>Add Todo</Button>
      </StyledButtonCol>
    </StyledRow>
    // </Container>
  );
});

export default TodoForm;
