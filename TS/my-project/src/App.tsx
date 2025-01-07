// import "./App.css";
// import { useCallback, useMemo, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import InputTodo from "./components/InputTodo";
// import TodoItem from "./components/TodoItem";
// import SearchTodo from "./components/SearchTodo";
// import useDebounce from "./components/useDebounce";

// type Todo = {
//   id: string;
//   name: string;
//   completed: boolean;
// };

// function App() {
//   const [todo, setTodo] = useState<Todo>({
//     id: "",
//     name: "",
//     completed: false,
//   });
//   const [todoList, setTodoList] = useState<Todo[]>([]);
//   const [searchText, setSearchText] = useState<string>("");

//   const debouncedSearchText = useDebounce(searchText, 500);

//   const handleGetTodo = useCallback((value: string) => {
//     // console.log("Get to do");

//     setTodo({
//       id: uuidv4(),
//       name: value,
//       completed: false,
//     });
//   }, []);

//   const handleAddTodo = useCallback(() => {
//     // console.log("Add to do");

//     if (todo.name.trim()) {
//       const ar = [...todoList];
//       ar.unshift(todo);
//       setTodoList(ar);
//       setTodo({
//         id: "",
//         name: "",
//         completed: false,
//       });
//     }
//   }, [todo, todoList]);

//   const handleDeleteTodo = useCallback(
//     (id: string) => {
//       console.log("Delete to do");

//       setTodoList((prev) => prev.filter((todo) => todo.id !== id));
//     },
//     [searchText]
//   );
//   //Tại sao searchText không thay đổi mà delete thay đổi

//   const handleCompleteTodo = useCallback((id: string) => {
//     // console.log("Complete to do");

//     setTodoList((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   }, []);

//   const handleEditTodo = useCallback((id: string, newName: string) => {
//     // console.log("Edit todo");

//     setTodoList((prev) =>
//       prev.map((todo) => (todo.id === id ? { ...todo, name: newName } : todo))
//     );
//   }, []);

//   const todosToShow = useMemo(() => {
//     console.log("Re-render Memo");

//     if (debouncedSearchText.trim() === "") {
//       return todoList;
//     }

//     return todoList.filter((todo) =>
//       todo.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
//     );
//   }, [todoList, debouncedSearchText]);

//   return (
//     <>
//       <SearchTodo searchText={searchText} onSearch={setSearchText} />
//       <InputTodo
//         a={<h1>Todo List</h1>}
//         todo={todo}
//         onGetTodo={handleGetTodo}
//         onAddTodo={handleAddTodo}
//       />
//       <ul>
//         {todosToShow.map((todo) => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onCompleted={handleCompleteTodo}
//             onDelete={handleDeleteTodo}
//             onEdit={handleEditTodo}
//           />
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// //Xem Reduce để làm Edit

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
