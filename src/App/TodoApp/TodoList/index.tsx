import React from "react";
import TodoListItem from "../TodoListItem";
import { Todo, CompleteTodo, DeleteTodo } from "../types";

interface TodoListProps {
  todos: Todo[];
  completeTodo: CompleteTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
