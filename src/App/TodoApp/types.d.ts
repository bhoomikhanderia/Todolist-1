import { DEFAULT_THEME } from "@zendeskgarden/react-theming";

interface TodoAppProps {
  theme?: typeof DEFAULT_THEME;
}

interface Todo {
  id: number;
  text: string;
  complete: boolean;
  edit: boolean;
}

type CompleteTodo = (selectedTodo: Todo) => void;

type DeleteTodo = (id: number) => void;

type AddTodo = (text: string) => void;
