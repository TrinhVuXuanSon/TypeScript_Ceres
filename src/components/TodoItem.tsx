import { TodoItemProps } from "../types/todo";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }: TodoItemProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center gap-2 p-2 border rounded-md hover:bg-gray-50">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="w-4 h-4 cursor-pointer mx-2"
          title="toggle"
        />

        <span
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.name}
        </span>
        <button
          onClick={() => navigate(`/details/${todo.id}`)}
          className="px-3 py-1 text-blue-500 rounded hover:bg-blue-100 text-lg"
        >
          Details
        </button>
      </div>
    </>
  );
};

export default TodoItem;
