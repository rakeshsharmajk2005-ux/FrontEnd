import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "../styles/Departments.css";

function Departments() {

  const [departments] = useState([
    {
      id: "DEP001",
      name: "Information Technology",
      manager: "Rakesh Sharma",
      employees: 35,
    },
    {
      id: "DEP002",
      name: "Human Resource",
      manager: "Rahul Kumar",
      employees: 12,
    },
    {
      id: "DEP003",
      name: "Finance",
      manager: "Priya Singh",
      employees: 18,
    },
    {
      id: "DEP004",
      name: "Marketing",
      manager: "Arun Raj",
      employees: 22,
    },
    {
      id: "DEP005",
      name: "Sales",
      manager: "Keerthana",
      employees: 28,
    },
  ]);

  return (
    <div className="departments">

      <div className="department-header">

        <div>
          <h1>Departments</h1>
          <p>Manage all company departments</p>
        </div>

        <button className="add-department-btn">
          <FaPlus />
          Add Department
        </button>

      </div>

      <div className="department-table">

        <table>

          <thead>

            <tr>
              <th>Department ID</th>
              <th>Department Name</th>
              <th>Manager</th>
              <th>Total Employees</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {departments.map((department) => (

              <tr key={department.id}>

                <td>{department.id}</td>

                <td>{department.name}</td>

                <td>{department.manager}</td>

                <td>{department.employees}</td>

                <td>

                  <button className="edit-btn">
                    <FaEdit />
                  </button>

                  <button className="delete-btn">
                    <FaTrash />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Departments;