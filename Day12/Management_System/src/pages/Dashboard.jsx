import "../styles/Dashboard.css";
import DashboardCards from "../components/DashboardCards";
import EmployeeTable from "../components/EmployeeTable";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, Admin 👋</p>
      </div>

      <DashboardCards />

      <div className="dashboard-table">

        <div className="table-title">
          <h2>Recent Employees</h2>
        </div>

        <EmployeeTable />

      </div>

    </div>
  );
}

export default Dashboard;