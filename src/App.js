import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import InputArea from "./components/InputArea";
import { ThemeContext } from "./context/ThemeContext";

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
        <InputArea />
        <Body />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
