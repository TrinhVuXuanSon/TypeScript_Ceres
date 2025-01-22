import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { Todo } from "../types/todo";
import { toggleTodo, deleteTodo, editTodo } from "../redux/todoSlice";

function HomePage() {
  const { todos, searchTerm } = useSelector(
    (state: { todos: { todos: Todo[]; searchTerm: string } }) => state.todos
  );

  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id:string) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id:string, newName:string) => {
    dispatch(editTodo({ id, name: newName }));
  };
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Quản lý công việc
        </h1>
        <InputTodo />
        <SearchBar />
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default HomePage;
