import React from 'react';
import { Todo } from '../../src/types/todo';

interface TodoItemProps {
  todo: Todo;
  onCompleted: () => void;
  onClick: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onCompleted, onClick }) => {
  return (
    <li className="flex items-center gap-4 mb-2 p-2 bg-gray-50 rounded text-black">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onCompleted}
        className="h-5 w-5"
        title='Todo Item'
      />
      <span
        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
        onClick={onClick}
      >
        {todo.name}
      </span>
      <button 
        onClick={onClick}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        View Details
      </button>
    </li>
  );
};

export default TodoItem;