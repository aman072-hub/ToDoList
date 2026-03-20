import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <>
      <div
        className="flex items-center bg-white/90 backdrop-blur-md 
      rounded-full px-5 py-2 shadow-md w-[320px] 
      hover:shadow-xl transition-all duration-300 
      focus-within:ring-2 focus-within:ring-yellow-300"
      >
        <Search size={20} className="text-gray-500 mr-2" />

        <input
          type="search"
          placeholder="Search your tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>
    </>
  );
};

export default SearchBar;
