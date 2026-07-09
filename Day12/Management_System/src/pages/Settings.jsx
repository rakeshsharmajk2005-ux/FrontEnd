import { useState } from "react";
import "../styles/Settings.css";

function Settings() {

  const [settings, setSettings] = useState({
    company: "ABC Technologies",
    admin: "Admin",
    email: "admin@company.com",
    phone: "9876543210",
    notification: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Saved Successfully");
  };

  return (
    <div className="settings">

      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage application settings</p>
      </div>

      <form className="settings-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Company Name</label>

          <input
            type="text"
            name="company"
            value={settings.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Administrator</label>

          <input
            type="text"
            name="admin"
            value={settings.admin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            value={settings.phone}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox-group">

          <label>

            <input
              type="checkbox"
              name="notification"
              checked={settings.notification}
              onChange={handleChange}
            />

            Enable Notifications

          </label>

        </div>

        <div className="checkbox-group">

          <label>

            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
            />

            Enable Dark Mode

          </label>

        </div>

        <button type="submit" className="save-settings-btn">
          Save Settings
        </button>

      </form>

    </div>
  );
}

export default Settings;