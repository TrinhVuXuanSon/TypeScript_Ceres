import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';
import { v4 as uuidv4 } from 'uuid';

interface TodoState {
  todos: Todo[];
  searchText: string;
  currentTodo: Todo | null;
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  searchText: '',
  currentTodo: null,
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: uuidv4(),
        name: action.payload,
        completed: false,
      };
      state.todos.unshift(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.name = action.payload.name;
      }
    },
    setCurrentTodo: (state, action: PayloadAction<string>) => {
      state.currentTodo = state.todos.find(todo => todo.id === action.payload) || null;
    },
  },
});

export const {
  setSearchText,
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  setCurrentTodo,
} = todoSlice.actions;

export default todoSlice.reducer;