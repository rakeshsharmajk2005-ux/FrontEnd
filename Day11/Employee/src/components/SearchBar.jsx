import React from "react";
import "./SearchBar.css";

function SearchBar({
  search,
  setSearch,
  department,
  setDepartment,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search by Employee Name or ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="department-select"
      >
        <option value="">All Departments</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select>
    </div>
  );
}

export default SearchBar;