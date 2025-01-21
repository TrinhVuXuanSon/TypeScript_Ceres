import TodoItem from "./TodoItem";
import { TodoListProps } from "../types/todo";

const TodoList = ({ todos, onToggle, onDelete, onEdit }: TodoListProps) => {
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold my-2">
          Đang thực hiện ({incompleteTodos.length})
        </h2>
        {incompleteTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onEdit={() => onEdit(todo.id, todo.name)}
          />
        ))}
      </div>
      {completedTodos.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">
            Đã hoàn thành ({completedTodos.length})
          </h2>
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggle(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => onEdit(todo.id, todo.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
