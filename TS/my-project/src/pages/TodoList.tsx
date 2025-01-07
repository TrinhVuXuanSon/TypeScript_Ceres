import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { addTodo, setSearchText, toggleTodo } from '../store/todoSlice';
import InputTodo from '../components/InputTodo';
import SearchTodoDebounce from '../components/SearchTodoDebounce';
import TodoItem from '../components/TodoItem';
import useDebounce from '../hooks/useDebounce';

function TodoList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { todos, searchText } = useSelector((state: RootState) => state.todos);
  const debouncedSearchText = useDebounce(searchText, 500);

  const filteredTodos = todos.filter(todo =>
    todo.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
  );

  const handleAddTodo = (name: string) => {
    if (name.trim()) {
      dispatch(addTodo(name));
    }
  };

  const handleTodoClick = (id: string) => {
    navigate(`/todo/${id}`);
  };

  return (
    <div>
      <SearchTodoDebounce
        searchText={searchText}
        onSearch={(value) => dispatch(setSearchText(value))}
      />
      <InputTodo onSubmit={handleAddTodo} />
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleted={() => dispatch(toggleTodo(todo.id))}
            onClick={() => handleTodoClick(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;