import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaUserPlus,
  FaClipboardCheck,
  FaBuilding,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">

        <div className="logo-circle">
          EMS
        </div>

        <h3>Employee MS</h3>

      </div>

      <ul className="menu">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUsers />
            <span>Employees</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-employee"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUserPlus />
            <span>Add Employee</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/attendance"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaClipboardCheck />
            <span>Attendance</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/departments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBuilding />
            <span>Departments</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/payroll"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaMoneyBillWave />
            <span>Payroll</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      <div className="logout">

        <FaSignOutAlt />

        <span>Logout</span>

      </div>

    </aside>
  );
}

export default Sidebar;