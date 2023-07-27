import React, { useState, useEffect } from 'react';
import EmptyList from '../components/emptyList';
import SearchBar from '../components/searchBar';
import Header from '../components/header';
import BlogList from '../components/blogList';
import { blogList } from '../data';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  // Fetch blogs from local storage and combine with existing blogs
  useEffect(() => {
    const localStorageBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    // Check if there are any missing fields in each blog and set default values
    const combinedBlogs = localStorageBlogs.map((blog) => ({
      ...blog,
      subCategory: blog.subCategory || '',
      createdAt: blog.createdAt || new Date().toISOString().substr(0, 10),
    }));
    setBlogs([...blogList, ...combinedBlogs]);
  }, []);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = [...blogList, ...blogs];
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs([...blogList, ...blogs]);
    setSearchKey('');
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
