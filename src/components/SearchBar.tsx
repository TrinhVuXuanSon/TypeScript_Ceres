import { SearchBarViewProps } from "../types/todo";

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarViewProps) => (
  <div>
    <input
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Search todo"
      className="w-full px-2 py-1 border rounded my-2"
    />
  </div>
);

export default SearchBar;
