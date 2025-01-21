import { useState } from "react";
import { TodoItemProps } from "../types/todo";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(Number(todo.id), editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.name);
    setIsEditing(false);
  };
  return (
    <>
      <div className="flex items-center gap-2 p-2 border rounded-md hover:bg-gray-50">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(Number(todo.id))}
          className="w-4 h-4 cursor-pointer"
          title="toggle"
        />
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 px-2 py-1 border rounded"
              title="edit-todo"
            />
            <button
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Lưu
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Hủy
            </button>
          </form>
        ) : (
          <span
            className={`flex-1 cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.name}
          </span>
        )}
        <button
          onClick={() => onDelete(Number(todo.id))}
          className="px-2 py-1 text-red-600 hover:bg-red-100 rounded"
        >
          Xóa
        </button>
      </div>
    </>
  );
};

export default TodoItem;
