import React from "react";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";

interface TodoAppProps {
  theme?: typeof DEFAULT_THEME;
}

const TodoApp = React.memo<TodoAppProps>(({ theme = DEFAULT_THEME }) => {
  return (
    <ThemeProvider theme={theme}>
      <TodoHeader />
      <TodoForm />
    </ThemeProvider>
  );
});

export default TodoApp;
