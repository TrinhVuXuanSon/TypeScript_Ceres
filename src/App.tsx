import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./components/InputTodo";
import TodoItem from "./components/TodoItem";

type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

function App() {
  const [todo, setTodo] = useState<Todo>({
    id: "",
    name: "",
    completed: false,
  });
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleGetTodo = (value: string) => {
    const todo = {
      id: uuidv4(),
      name: value,
      completed: false,
    };
    setTodo(todo);
  };

  const handleAddTodo = () => {
    setTodoList((prev) => [todo, ...prev]);
    setTodo({
      id: "",
      name: "",
      completed: false,
    });
  };

  const handleDeleteTodo = (id: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleCompleteTodo = (id: string) => {
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
    <>
      <InputTodo todo={todo} onGetTodo={handleGetTodo} onAddTodo={handleAddTodo}/>

      <ul>
        {todoList.map((todo) => (
          <TodoItem todo={todo} onCompleted={handleCompleteTodo} onDelete={handleDeleteTodo}/>
        ))}
      </ul>
    </>
  );
}

export default App;
