type Todo = {
  id: string;
  name: string;
  completed: boolean;
}

type TodoItemProps = {
  todo: Todo;
  onGetTodo: (id: string) => void;
  onAdd: (id: string) => void;
}

function InputTodo({ todo, onGetTodo, onAdd }: TodoItemProps ) {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => onGetTodo(e.target.value)}
          value={todo.name}
          title="Input Todo"
        />
        <button onClick={() => onAdd(todo.id)}>Add</button>
      </div>
    );
  }
  
  export default InputTodo;
  