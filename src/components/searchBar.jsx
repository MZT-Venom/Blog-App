import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
      <Link to="/create">
        <button> New </button>
      </Link>
    </form>
  </div>
);

export default SearchBar;
