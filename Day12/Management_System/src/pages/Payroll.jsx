import { useState } from "react";
import "../styles/Payroll.css";

function Payroll() {

  const [payroll] = useState([
    {
      id: "EMP001",
      name: "Rakesh Sharma",
      department: "IT",
      salary: 50000,
      bonus: 5000,
      deduction: 2000,
      status: "Paid",
    },
    {
      id: "EMP002",
      name: "Rahul Kumar",
      department: "HR",
      salary: 45000,
      bonus: 3000,
      deduction: 1000,
      status: "Pending",
    },
    {
      id: "EMP003",
      name: "Priya Singh",
      department: "Finance",
      salary: 60000,
      bonus: 7000,
      deduction: 2500,
      status: "Paid",
    },
    {
      id: "EMP004",
      name: "Arun Raj",
      department: "Marketing",
      salary: 42000,
      bonus: 2500,
      deduction: 800,
      status: "Pending",
    },
    {
      id: "EMP005",
      name: "Keerthana",
      department: "Sales",
      salary: 47000,
      bonus: 3500,
      deduction: 1500,
      status: "Paid",
    },
  ]);

  return (
    <div className="payroll">

      <div className="payroll-header">

        <div>
          <h1>Payroll Management</h1>
          <p>Manage employee salary details</p>
        </div>

        <button className="pay-btn">
          Process Payroll
        </button>

      </div>

      <div className="payroll-table">

        <table>

          <thead>

            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Basic Salary</th>
              <th>Bonus</th>
              <th>Deduction</th>
              <th>Net Salary</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {payroll.map((employee) => (

              <tr key={employee.id}>

                <td>{employee.id}</td>

                <td>{employee.name}</td>

                <td>{employee.department}</td>

                <td>₹ {employee.salary.toLocaleString()}</td>

                <td>₹ {employee.bonus.toLocaleString()}</td>

                <td>₹ {employee.deduction.toLocaleString()}</td>

                <td>
                  ₹ {(employee.salary + employee.bonus - employee.deduction).toLocaleString()}
                </td>

                <td>

                  <span
                    className={
                      employee.status === "Paid"
                        ? "paid"
                        : "pending"
                    }
                  >
                    {employee.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Payroll;