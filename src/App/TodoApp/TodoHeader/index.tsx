import React from "react";
import styled from "styled-components";

const Header = styled.div`
  padding-top: ${({ theme }) => theme.space.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.foreground};
`;

const TodoHeader = React.memo(() => {
  return <Header>My Todos</Header>;
});

export default TodoHeader;
