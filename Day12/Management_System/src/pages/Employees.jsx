import "../styles/Employees.css";

import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  return (
    <div className="employees-page">

      <div className="employees-header">

        <div>
          <h1>Employees</h1>
          <p>Manage all employee records</p>
        </div>

        <button className="add-btn">
          + Add Employee
        </button>

      </div>

      <SearchBar />

      <EmployeeTable />

    </div>
  );
}

export default Employees;