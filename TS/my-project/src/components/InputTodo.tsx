import React from "react";

type Todo = {
    name: string;
}

type TodoItemProps = {
    todo: Todo;
    onGetTodo: (value: string) => void;
    onAddTodo: () => void;
    a: React.ReactNode;
}

function InputTodo({ todo, onGetTodo, onAddTodo }: TodoItemProps) {    
  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          aria-label="inputTodo"
          className="bg-cyan-50 p-2 text-black mr-2 rounded-md"
          value={todo.name}
          onChange={(e) => onGetTodo(e.target.value)}
        />
        <button
          onClick={onAddTodo}
          className="bg-cyan-500 text-white py-2 px-4"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default InputTodo;
