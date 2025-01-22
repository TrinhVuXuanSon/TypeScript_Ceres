import useDebounce from "../hooks/useDebounce";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/todoSlice';

const SearchBar = () => {
  const [searchTerm, setLocalSearchTerm] = useState("");
  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(setSearchTerm(debouncedSearchTerm));
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        placeholder="Search todo"
        className="w-full px-2 py-1 border rounded my-2"
      />
    </div>
  );
};

export default SearchBar;
