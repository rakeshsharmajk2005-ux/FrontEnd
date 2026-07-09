import React, { useState, useEffect } from "react";
import "./EmployeeForm.css";

function EmployeeForm({ onSave, selectedEmployee, onCancel }) {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    salary: "",
    gender: "",
    address: "",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !employee.id ||
      !employee.name ||
      !employee.email ||
      !employee.phone ||
      !employee.department ||
      !employee.salary ||
      !employee.gender ||
      !employee.address
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSave(employee);

    setEmployee({
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      salary: "",
      gender: "",
      address: "",
    });
  };

  return (
    <div className="form-container">
      <h2>
        {selectedEmployee ? "Update Employee" : "Add New Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="id"
          placeholder="Employee ID"
          value={employee.id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={employee.phone}
          onChange={handleChange}
        />

        <select
          name="department"
          value={employee.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <select
          name="gender"
          value={employee.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="address"
          placeholder="Address"
          rows="3"
          value={employee.address}
          onChange={handleChange}
        ></textarea>

        <div className="button-group">
          <button type="submit" className="save-btn">
            {selectedEmployee ? "Update" : "Save"}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default EmployeeForm;