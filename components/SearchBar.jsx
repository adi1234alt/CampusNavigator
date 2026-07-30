import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Building..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
  onClick={() => {
    console.log("Button Clicked:", search);
    onSearch(search);
  }}
>
  Search
</button>
    </div>
  );
}

export default SearchBar;