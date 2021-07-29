import React from 'react';
import './Filter.css';

export default function Filter({ filter, handleChange }) {
  return (
    <div>
      <p className="filter-title">Find contacts by name</p>
      <input
        className="search"
        onChange={handleChange}
        type="text"
        name="filter"
        value={filter}
      />
    </div>
  );
}
