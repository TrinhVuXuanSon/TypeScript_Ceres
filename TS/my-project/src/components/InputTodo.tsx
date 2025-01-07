import React, { useState } from 'react';

interface InputTodoProps {
  onSubmit: (value: string) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Add new todo..."
      />
      <button 
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Todo
      </button>
    </div>
  );
};

export default InputTodo;