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
  },
  {
    id: 2,
    text: "Create app testing plan",
    complete: true,
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
    const newTodo = { id: Date.now(), text, complete: false };
    if (newTodo.text.trim() !== "") {
      setTodos([...todos, newTodo]);
    }
  };

  const editTodo = (text: string, id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <TodoHeader />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={editTodo}
      />
    </ThemeProvider>
  );
});

export default TodoApp;
