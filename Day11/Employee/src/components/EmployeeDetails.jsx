import React from "react";
import "./EmployeeDetails.css";

function EmployeeDetails({ employee, onClose }) {
  if (!employee) {
    return (
      <div className="details-container">
        <h2>Employee Details</h2>
        <p className="no-selection">
          Select an employee to view details.
        </p>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-header">
        <h2>Employee Details</h2>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>

      <div className="details-body">

        <div className="detail-item">
          <label>Employee ID</label>
          <span>{employee.id}</span>
        </div>

        <div className="detail-item">
          <label>Full Name</label>
          <span>{employee.name}</span>
        </div>

        <div className="detail-item">
          <label>Email</label>
          <span>{employee.email}</span>
        </div>

        <div className="detail-item">
          <label>Phone Number</label>
          <span>{employee.phone}</span>
        </div>

        <div className="detail-item">
          <label>Department</label>
          <span>{employee.department}</span>
        </div>

        <div className="detail-item">
          <label>Salary</label>
          <span>₹ {employee.salary}</span>
        </div>

        <div className="detail-item">
          <label>Gender</label>
          <span>{employee.gender}</span>
        </div>

        <div className="detail-item">
          <label>Address</label>
          <span>{employee.address}</span>
        </div>

      </div>
    </div>
  );
}

export default EmployeeDetails;