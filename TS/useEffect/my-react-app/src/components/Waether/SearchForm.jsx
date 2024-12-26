import React from "react";

const SearchForm = ({ city, setCity, fetchWeather }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <form onSubmit={handleSearch} style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "200px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchForm;
