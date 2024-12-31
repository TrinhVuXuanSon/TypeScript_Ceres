type Todo = {
    id: string;
    name: string;
    completed: boolean;
}

type TodoItemProps = {
    todo: Todo;
    onCompleted: (id:string) => void;
    onDelete: (id:string) => void;
    onEdit: (id:string, newName: string) => void;
}

function TodoItem({ todo, onCompleted, onDelete, onEdit }: TodoItemProps) {
    return (
        <>
            <li
            key={todo.id}
            className="mb-2 flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md"
          >
            <div
              className={`cursor-pointer flex items-center justify-between gap-2 ${todo.completed
                  ? "line-through text-gray-500"
                  : "text-black no-underline"} `               
              }                
              
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onCompleted(todo.id)}
                aria-label="completed"
                className="cursor-pointer"
              />
              <span onClick={() => onCompleted(todo.id)}>
                {todo.name}
              </span>
            </div>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => onEdit(todo.id, todo.name)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        </>
    );
}

export default TodoItem;