import React, { useState, useEffect } from "react";
import EmptyList from "../components/emptyList";
import SearchBar from "../components/searchBar";
import Header from "../components/header";
import BlogList from "../components/blogList";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:4000/getBlogs");
        const data = await response.json();
        setBlogs(data); // Update the blogs state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const filteredBlogs = blogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey("");
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default HomePage;
