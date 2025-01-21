import {useEffect, useState} from 'react';
import { Todo } from './types/todo';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

import  SearchBar  from './components/SearchBar';
import InputTodo from './components/InputTodo';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (name: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      name,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newName: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, name: newName } : todo
    ));
  };

  const filteredTodos = todos.filter(todo =>
    todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Quản lý công việc</h1>
        <InputTodo onAdd={addTodo} />
        <SearchBar onSearch={setSearchTerm} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
};

export default App;