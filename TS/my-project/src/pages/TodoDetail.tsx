import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteTodo, updateTodo, setCurrentTodo } from '../store/todoSlice';

function TodoDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentTodo = useSelector((state: RootState) => state.todos.currentTodo);
  const [editedName, setEditedName] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(setCurrentTodo(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (currentTodo) {
      setEditedName(currentTodo.name);
    }
  }, [currentTodo]);

  if (!currentTodo) {
    return <div>Todo not found</div>;
  }

  const handleDelete = () => {
    dispatch(deleteTodo(currentTodo.id));
    navigate('/');
  };

  const handleNameChange = (newName: string) => {
    setEditedName(newName);
    setIsEdited(newName !== currentTodo.name);
  };

  const handleSave = () => {
    if (editedName.trim() && isEdited) {
      dispatch(updateTodo({ id: currentTodo.id, name: editedName.trim() }));
      setTimeout(() => {
        navigate('/');
      }, 1000);
      
      setIsEdited(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Todo Details</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={editedName}
              onChange={(e) => handleNameChange(e.target.value)}
              className="flex-1 p-2 border rounded"
              title="Chi tiet"
            />
            <button
              onClick={handleSave}
              disabled={!isEdited}
              className={`px-4 py-2 rounded text-white ${
                isEdited
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;