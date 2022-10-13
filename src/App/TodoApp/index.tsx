import React, { useState } from "react";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";
import TodoHeader from "./TodoHeader";
import TodoForm from "./AddTodoForm";
import { TodoList } from "./TodoList";
import { TodoAppProps, Todo } from "./types";

const initialTodos: Todo[] = [
  {
    id: 1,
    text: "Feed the birds",
    complete: false,
    edit: false,
  },
  {
    id: 2,
    text: "Create app testing plan",
    complete: true,
    edit: false,
  },
];

const TodoApp = React.memo<TodoAppProps>(({ theme = DEFAULT_THEME }) => {
  const [todos, setTodos] = useState(initialTodos);

  const completeTodo = (selectedTodo: Todo) => {
    // index of the todo
    const index = todos.indexOf(selectedTodo);

    // change todo completed status
    selectedTodo.complete = !selectedTodo.complete;

    // then we need to replace it with one in todos
    todos.splice(index, 1, selectedTodo);

    // update the state
    setTodos([...todos]);
  };

  const deleteTodo = (id: number) => {
    // find index of todo from id
    const index = todos.findIndex((todo) => todo.id === id);

    // remove todo
    todos.splice(index, 1);

    // update the state
    setTodos([...todos]);
  };

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, complete: false, edit: false };
    if (newTodo.text.trim() === "") {
      return;
    }
    setTodos([...todos, newTodo]);
  };

  return (
    <ThemeProvider theme={theme}>
      <TodoHeader />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </ThemeProvider>
  );
});

export default TodoApp;
