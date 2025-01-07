type SearchTodoProps = {
  searchText: string;
  onSearch: (value: string) => void;
};

function SearchTodo({ searchText, onSearch }: SearchTodoProps) {
  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          aria-label="searchTodo"
          className="bg-cyan-50 p-2 text-black mr-2 rounded-md w-full"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchTodo;
