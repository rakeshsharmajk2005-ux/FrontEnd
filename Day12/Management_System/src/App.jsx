import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Attendance from "./pages/Attendance";
import Departments from "./pages/Departments";
import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="page-content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/employees"
              element={<Employees />}
            />

            <Route
              path="/add-employee"
              element={<AddEmployee />}
            />

            <Route
              path="/edit-employee"
              element={<EditEmployee />}
            />

            <Route
              path="/attendance"
              element={<Attendance />}
            />

            <Route
              path="/departments"
              element={<Departments />}
            />

            <Route
              path="/payroll"
              element={<Payroll />}
            />

            <Route
              path="/reports"
              element={<Reports />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Routes>

        </div>

      </div>

    </div>
  );
}

export default App;