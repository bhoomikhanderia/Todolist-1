import React from "react";
import TodoHeader from "./TodoHeader";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";

interface TodoAppProps {
  theme?: typeof DEFAULT_THEME;
}

const TodoApp = React.memo<TodoAppProps>(({ theme = DEFAULT_THEME }) => {
  return (
    <ThemeProvider theme={theme}>
      <TodoHeader />
    </ThemeProvider>
  );
});

export default TodoApp;
