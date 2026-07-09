import "../styles/Navbar.css";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-title">
        <h2>Employee Management System</h2>
      </div>

      <div className="navbar-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search Employee..."
        />
      </div>

      <div className="navbar-profile">

        <FaBell className="nav-icon" />

        <div className="profile-details">
          <FaUserCircle className="profile-icon" />

          <div>
            <h4>Admin</h4>
            <span>HR Manager</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;