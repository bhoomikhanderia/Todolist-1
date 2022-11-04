import React from "react";
import TodoListItem from "../TodoListItem";
import { Todo, CompleteTodo, DeleteTodo, UpdateTodo, AddTodo } from "../types";

interface TodoListProps {
  todos: Todo[];
  completeTodo: CompleteTodo;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
  addTodo: AddTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  completeTodo,
  deleteTodo,
  updateTodo,
  addTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          addTodo={addTodo}
        />
      ))}
    </ul>
  );
};
