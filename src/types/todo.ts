export type TodoProps = {
  id: string;
  name: string;
  completed: boolean;
};

export interface TodoItemProps {
  todo: TodoProps;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newName: string) => void;
}

export interface TodoListProps {
  todos: TodoProps[];
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
  todos: TodoProps[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

export interface HomePageProps {
  todos: {
    todos: TodoProps[];
    searchTerm: string;
  };
}

export interface TodoSliceProps {
  todos: TodoProps[];
  searchTerm: string;
}

export interface RootStateProps {
  todos: {
    todos: TodoProps[];
  };
}

export interface DetailsViewProps {
  todo: TodoProps | undefined;
  editText: string;
  onEditChange: (value: string) => void;
  onSave: () => void;
  onDelete: () => void;
  onBack: () => void;
}

export interface SearchBarViewProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputTodoViewProps {
  text: string;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

export interface TodoItemViewProps {
  todo: TodoProps;
  onToggle: () => void;
  onDetails: () => void;
}