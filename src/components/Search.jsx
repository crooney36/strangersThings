import React from "react";
import { useOutletContext } from "react-router-dom";

const Search = () => {
  const [posts, setPosts] = useOutletContext;
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
    return searchTerm;
    console.log("Search term: ", term);
  }

  return (
    <div id="search-bar">
      <input type="search" placeholder="Search for items!" />
      <button id="searchButton">Search</button>
    </div>
  );
};

export default Search;
