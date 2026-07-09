import React from "react";
import "./Header.css";

function Header({ employeeCount, onAddEmployee }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Employee Management Dashboard</h1>
        <p>Manage your employees efficiently</p>
      </div>

      <div className="header-right">
        <div className="employee-count">
          <span>Total Employees</span>
          <h2>{employeeCount}</h2>
        </div>

        <button className="add-btn" onClick={onAddEmployee}>
          + Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;