import { useState } from "react";
import API from "../services/api";
import "../styles/EmployeeForm.css";

function EmployeeForm() {

  const [employee, setEmployee] = useState({
    employeeId: "",
    name: "",
    department: "",
    designation: "",
    email: "",
    phone: "",
    salary: "",
    joiningDate: "",
    status: "Active"
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/employees", employee);

      alert("Employee Added Successfully");

    }

    catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="employee-form-container">

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="employeeId"
              placeholder="EMP001"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Employee Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Joining Date</label>
            <input
              type="date"
              name="joiningDate"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

        </div>

        <div className="button-group">

          <button
            type="submit"
            className="save-btn"
          >
            Save Employee
          </button>

          <button
            type="reset"
            className="cancel-btn"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}

export default EmployeeForm;