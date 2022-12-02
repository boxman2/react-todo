import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import { ThemeContext } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";

function App() {
  const item = JSON.parse(localStorage.getItem("todo"));
  const number = localStorage.getItem("number");

  const [todos, setTodos] = useState(item || []);
  const [count, setCount] = useState(number || 0);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
    localStorage.setItem("number", count);
  }, [todos, count]);

  return (
    <ThemeContext.Provider value={{ todos, setTodos, count, setCount }}>
      <div className="layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Aboutpage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
