import "./App.css";
import { useState } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  name: string;
  completed: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [todo, setTodo] = useState<Todo>({
    id: "",
    name: "",
    completed: false,
  });

  const handleGetTodo = (value:string) => {

    const todo = {
      id: uuidv4(),
      name: value,
      completed: false,
    };

    setTodo(todo);
  };

  const handleAdd = () => {
    setTodoList((prev) => {
      return [todo, ...prev];
    });

    setTodo({
      id: "",
      name: "",
      completed: false,
    });
  };

  const handleDelete = (id:string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleComplete = (id:string) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <InputTodo todo={todo} onGetTodo={handleGetTodo} onAdd={handleAdd} />
      <TodoList
        todoList={todoList}
        onDelete={handleDelete}
        onToggle={handleComplete}
      />
    </div>
  );
}

export default App;
