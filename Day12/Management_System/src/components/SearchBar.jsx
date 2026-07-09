import "../styles/SearchBar.css";
import { FaSearch, FaFilter, FaSyncAlt } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="searchbar">

      <div className="search-input">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search Employee..."
        />
      </div>

      <select>
        <option>All Departments</option>
        <option>Human Resource</option>
        <option>Information Technology</option>
        <option>Finance</option>
        <option>Marketing</option>
        <option>Sales</option>
      </select>

      <select>
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button className="filter-btn">
        <FaFilter />
        Filter
      </button>

      <button className="reset-btn">
        <FaSyncAlt />
        Reset
      </button>

    </div>
  );
}

export default SearchBar;