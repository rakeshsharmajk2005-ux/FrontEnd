import React from "react";
import "./EmployeeTable.css";

function EmployeeTable({
  employees,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>₹ {employee.salary}</td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() => onView(employee)}
                  >
                    View
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(employee)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">
                No Employee Records Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;