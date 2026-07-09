import "../styles/Reports.css";
import {
  FaUsers,
  FaUserCheck,
  FaMoneyBillWave,
  FaBuilding
} from "react-icons/fa";

function Reports() {

  const reportData = [
    {
      title: "Total Employees",
      value: 250,
      icon: <FaUsers />,
      color: "#5B5CEB"
    },
    {
      title: "Present Today",
      value: 228,
      icon: <FaUserCheck />,
      color: "#22C55E"
    },
    {
      title: "Departments",
      value: 5,
      icon: <FaBuilding />,
      color: "#F59E0B"
    },
    {
      title: "Monthly Payroll",
      value: "₹ 12,50,000",
      icon: <FaMoneyBillWave />,
      color: "#EF4444"
    }
  ];

  const departmentReport = [
    {
      department: "Information Technology",
      employees: 70,
      manager: "Rakesh Sharma"
    },
    {
      department: "Human Resource",
      employees: 25,
      manager: "Rahul Kumar"
    },
    {
      department: "Finance",
      employees: 40,
      manager: "Priya Singh"
    },
    {
      department: "Marketing",
      employees: 55,
      manager: "Arun Raj"
    },
    {
      department: "Sales",
      employees: 60,
      manager: "Keerthana"
    }
  ];

  return (
    <div className="reports">

      <div className="reports-header">
        <h1>Reports</h1>
        <p>Company Performance Summary</p>
      </div>

      <div className="report-cards">

        {reportData.map((item, index) => (

          <div className="report-card" key={index}>

            <div
              className="report-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <div>

              <h4>{item.title}</h4>

              <h2>{item.value}</h2>

            </div>

          </div>

        ))}

      </div>

      <div className="department-report">

        <h2>Department Summary</h2>

        <table>

          <thead>

            <tr>
              <th>Department</th>
              <th>Manager</th>
              <th>Total Employees</th>
            </tr>

          </thead>

          <tbody>

            {departmentReport.map((dept, index) => (

              <tr key={index}>

                <td>{dept.department}</td>

                <td>{dept.manager}</td>

                <td>{dept.employees}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Reports;