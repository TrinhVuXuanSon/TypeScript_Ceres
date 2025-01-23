import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/todoSlice";
import TodoItem from "../components/TodoItem";
import { TodoItemProps } from "../types/todo";

const TodoItemContainer = ({ todo }: TodoItemProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTodo(todo.id));
  const handleDetails = () => navigate(`/details/${todo.id}`);

  return (
    <TodoItem todo={todo} onToggle={handleToggle} onDetails={handleDetails} />
  );
};
export default TodoItemContainer;
