import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../redux/todoSlice";
import { RootStateProps, TodoProps } from "../types/todo";
import DetailsView from "../components/DetailsView";

const DetailsContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todo = useSelector((state: RootStateProps) =>
    state.todos.todos.find((todo: TodoProps) => todo.id === id)
  );
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (todo) {
      setEditText(todo.name);
    }
  }, [todo]);

  const handleSave = () => {
    if (editText.trim() && id) {
      dispatch(editTodo({ id, name: editText }));
      navigate("/home");
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      if (id) {
        dispatch(deleteTodo(id));
      }
      navigate("/home");
    }
  };
  return (
    <DetailsView
      todo={todo}
      editText={editText}
      onEditChange={setEditText}
      onSave={handleSave}
      onDelete={handleDelete}
      onBack={() => navigate("/home")}
    />
  );
};

export default DetailsContainer;
