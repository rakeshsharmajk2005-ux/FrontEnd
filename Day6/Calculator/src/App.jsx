import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const backspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    if (display === "") return;

    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="container">
      <div className="calculator">

        <h2>🧮 Calculator</h2>

        <input
          type="text"
          value={display}
          readOnly
          className="display"
        />

        <div className="top-buttons">
          <button className="clear" onClick={clearDisplay}>
            🗑
          </button>

          <button className="backspace" onClick={backspace}>
            ⌫
          </button>
        </div>

        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={
                btn === "="
                  ? "equal"
                  : ["+", "-", "×", "÷"].includes(btn)
                  ? "operator"
                  : ""
              }
              onClick={() => {
                if (btn === "=") {
                  calculate();
                } else if (btn === "×") {
                  handleClick("*");
                } else if (btn === "÷") {
                  handleClick("/");
                } else {
                  handleClick(btn);
                }
              }}
            >
              {btn}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;