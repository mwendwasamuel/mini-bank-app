import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by description..."
      />
    </div>
  );
};

export default SearchBar;
