type Todo = {
  id: string;
  name: string;
  completed: boolean;
}

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

function TodoItem ({ todo, onDelete, onToggle }: TodoItemProps) {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <li
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          listStyleType: "none",
        }}
      >
        <input 
          type="checkbox" 
          checked={todo.completed} 
          readOnly 
          title="Completed Todo" 
        />
        {todo.name}
      </li>
      <button
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
