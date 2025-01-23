import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { TodoSliceProps } from "../types/todo";

const initialState: TodoSliceProps = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  searchTerm: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        name: action.payload,
        completed: false,
      };
      state.todos.unshift(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (todo) {
        todo.name = action.payload.name;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, setSearchTerm } =
  todoSlice.actions;
export default todoSlice.reducer;
