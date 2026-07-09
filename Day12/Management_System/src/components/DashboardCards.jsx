import { useEffect, useState } from "react";
import "../styles/DashboardCards.css";
import API from "../services/api";

import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaBuilding
} from "react-icons/fa";

function DashboardCards() {

  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {

      const employeeResponse = await API.get("/employees");
      const departmentResponse = await API.get("/departments");

      setEmployees(employeeResponse.data);
      setDepartments(departmentResponse.data);

    } catch (error) {
      console.log(error);
    }
  };

  const dashboardData = [
    {
      title: "Total Employees",
      value: employees.length,
      icon: <FaUsers />,
      color: "#5B5CEB"
    },
    {
      title: "Active Employees",
      value: employees.filter(emp => emp.status === "Active").length,
      icon: <FaUserCheck />,
      color: "#22C55E"
    },
    {
      title: "Inactive Employees",
      value: employees.filter(emp => emp.status === "Inactive").length,
      icon: <FaUserTimes />,
      color: "#EF4444"
    },
    {
      title: "Departments",
      value: departments.length,
      icon: <FaBuilding />,
      color: "#F59E0B"
    }
  ];

  return (

    <div className="dashboard-cards">

      {dashboardData.map((card, index) => (

        <div className="card" key={index}>

          <div
            className="card-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div className="card-info">

            <h4>{card.title}</h4>

            <h2>{card.value}</h2>

          </div>

        </div>

      ))}

    </div>

  );
}

export default DashboardCards;