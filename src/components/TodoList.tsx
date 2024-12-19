import TodoItem from "./TodoItem";

type Todo = {
  id: string;
  name: string;
  completed: boolean;
}

type TodoItemProps = {
  todoList: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

function TodoList({ todoList, onDelete, onToggle }: TodoItemProps) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
