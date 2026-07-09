import { useEffect, useState } from "react";
import "../styles/EmployeeTable.css";
import API from "../services/api";
import { FaEdit, FaTrash } from "react-icons/fa";

function EmployeeTable() {

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await API.get("/employees");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {

    try{

        await API.delete(`/employees/${id}`);

        fetchEmployees();

    }

    catch(error){

        console.log(error);

    }

};

  return (
    <div className="employee-table-container">

      <table className="employee-table">

        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Phone</th>
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

              <td>{employee.designation}</td>

              <td>{employee.email}</td>

              <td>{employee.phone}</td>

              <td>
                <span
                  className={
                    employee.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {employee.status}
                </span>
              </td>

              <td>

                <button className="edit-btn">
                  <FaEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteEmployee(employee.id)}/>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;