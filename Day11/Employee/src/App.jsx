import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: "101",
      name: "John Doe",
      email: "john@gmail.com",
      phone: "9876543210",
      department: "IT",
      salary: "50000",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: "102",
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876543211",
      department: "HR",
      salary: "45000",
      gender: "Female",
      address: "Coimbatore",
    },
    {
      id: "103",
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9876543212",
      department: "Finance",
      salary: "55000",
      gender: "Male",
      address: "Bangalore",
    },
  ]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSave = (employee) => {
    const exists = employees.find((emp) => emp.id === employee.id);

    if (exists) {
      setEmployees(
        employees.map((emp) =>
          emp.id === employee.id ? employee : emp
        )
      );
    } else {
      setEmployees([...employees, employee]);
    }

    setSelectedEmployee(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    return (
      (emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.id.includes(search)) &&
      (department === "" || emp.department === department)
    );
  });

  return (
    <div className="container">

      <Header
        employeeCount={employees.length}
        onAddEmployee={() =>
          setSelectedEmployee({
            id: "",
            name: "",
            email: "",
            phone: "",
            department: "",
            salary: "",
            gender: "",
            address: "",
          })
        }
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
      />

      <EmployeeTable
        employees={filteredEmployees}
        onView={setSelectedEmployee}
        onEdit={setSelectedEmployee}
        onDelete={handleDelete}
      />

      {selectedEmployee && (
        <>
          <EmployeeForm
            selectedEmployee={selectedEmployee}
            onSave={handleSave}
            onCancel={() => setSelectedEmployee(null)}
          />

          <EmployeeDetails
            employee={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
          />
        </>
      )}

    </div>
  );
}

export default App;