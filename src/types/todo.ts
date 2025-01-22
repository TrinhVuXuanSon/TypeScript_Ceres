export type Todo = {
    id: string;
    name: string;
    completed: boolean;
  }

export interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newName: string) => void;
  }

export interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newName: string) => void;
  }

export interface InputTodoProps {
    onAdd: (value: string) => void;
  }

export interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

export interface DetailsProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

export interface HomePageProps {
  todos: TodoListProps['todos'];
  onAdd: (value: string) => void;
  onSearch: (searchTerm: string) => void;
}