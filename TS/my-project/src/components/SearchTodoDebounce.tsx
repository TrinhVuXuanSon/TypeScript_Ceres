import React from 'react';

interface SearchTodoProps {
  searchText: string;
  onSearch: (value: string) => void;
}

const SearchTodoDebounce: React.FC<SearchTodoProps> = ({ searchText, onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Search todos..."
      />
    </div>
  );
};

export default SearchTodoDebounce;