import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/todoSlice';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector(state => 
    state.todos.todos.find(todo => todo.id === id)
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
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow mt-8">
      <h2 className="text-2xl font-bold mb-6">Chi tiết công việc</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tên công việc
          </label>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            title="name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trạng thái
          </label>
          <span className={todo.completed ? "text-green-600" : "text-yellow-600"}>
            {todo.completed ? "Đã hoàn thành" : "Đang thực hiện"}
          </span>
        </div>
        <div className="flex gap-4 justify-end pt-4">
          <button
            onClick={() => navigate("/home")}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Quay lại
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Lưu
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
