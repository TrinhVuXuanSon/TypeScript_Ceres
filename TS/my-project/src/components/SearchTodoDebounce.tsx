

type SearchTodoProps = {
  searchText: string;
  onSearch: (value: string) => void;
};

function SearchTodoDebounce({ searchText, onSearch }: SearchTodoProps) {

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          aria-label="searchTodo"
          className="bg-cyan-50 p-2 text-black mr-2 rounded-md w-full"
          placeholder="Search..."
          value={searchText} // Giá trị được điều khiển từ cha
          onChange={(e) => onSearch(e.target.value)} // Cập nhật giá trị từ cha
        />
      </div>
    </div>
  );
}

export default SearchTodoDebounce;
