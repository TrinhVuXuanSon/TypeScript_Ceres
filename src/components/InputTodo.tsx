import { useState } from "react";
// import { InputTodoProps } from "../types/todo";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const InputTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-2 py-1 border rounded"
          placeholder="Add new todo"
        />
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default InputTodo;
