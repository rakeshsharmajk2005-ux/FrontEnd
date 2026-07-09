import "../styles/AddEmployee.css";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
  return (
    <div className="add-employee">

      <h1>Add Employee</h1>

      <EmployeeForm />

    </div>
  );
}

export default AddEmployee;