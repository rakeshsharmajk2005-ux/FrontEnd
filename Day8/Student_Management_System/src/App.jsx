import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    department: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const addStudent = () => {
    if (
      student.id.trim() === "" ||
      student.name.trim() === "" ||
      student.department.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const exist = students.find((s) => s.id === student.id);

    if (exist) {
      alert("Student ID already exists");
      return;
    }

    setStudents([
      ...students,
      {
        ...student,
        status: "Absent",
      },
    ]);

    setStudent({
      id: "",
      name: "",
      department: "",
    });
  };

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Absent" ? "Present" : "Absent",
            }
          : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const present = students.filter((s) => s.status === "Present").length;
  const absent = students.filter((s) => s.status === "Absent").length;

  return (
    <div className="container">
      <div className="card">

        <h1>🎓 Student Management System</h1>

        <div className="form">
          <input
            type="text"
            placeholder="Student ID"
            name="id"
            value={student.id}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Student Name"
            name="name"
            value={student.name}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Department"
            name="department"
            value={student.department}
            onChange={handleChange}
          />

          <button onClick={addStudent}>
            Add Student
          </button>
        </div>

        <div className="summary">
          <div>Total : {students.length}</div>
          <div>✅ Present : {present}</div>
          <div>❌ Absent : {absent}</div>
        </div>

        <table>

          <thead>
            <tr>
              <th>S.No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Attendance</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>

            {students.length === 0 ? (
              <tr>
                <td colSpan="6" className="empty">
                  No Student Records
                </td>
              </tr>
            ) : (
              students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.department}</td>

                  <td>
                    <button
                      className={
                        student.status === "Present"
                          ? "present"
                          : "absent"
                      }
                      onClick={() => toggleAttendance(student.id)}
                    >
                      {student.status}
                    </button>
                  </td>

                  <td>
                    <button
                      className="delete"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default App;