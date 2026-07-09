import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/Attendance.css";

function Attendance() {

const [employees, setEmployees] = useState([]);

  const toggleAttendance = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              status:
                employee.status === "Present"
                  ? "Absent"
                  : "Present",
            }
          : employee
      )
    );
  };

  useEffect(() => {

    fetchAttendance();

}, []);

const fetchAttendance = async () => {

    const response = await API.get("/attendance");

    setEmployees(response.data);

};
  return (
    <div className="attendance">

      <div className="attendance-header">
        <h1>Attendance Management</h1>
        <p>Manage employee attendance</p>
      </div>

      <div className="attendance-table">

        <table>

          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {employees.map((employee) => (

              <tr key={employee.id}>

                <td>{employee.id}</td>

                <td>{employee.name}</td>

                <td>{employee.department}</td>

                <td>

                  <span
                    className={
                      employee.status === "Present"
                        ? "present"
                        : "absent"
                    }
                  >
                    {employee.status}
                  </span>

                </td>

                <td>

                  <button
                    className="attendance-btn"
                    onClick={() => toggleAttendance(employee.id)}
                  >
                    Mark {employee.status === "Present" ? "Absent" : "Present"}
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

export default Attendance;