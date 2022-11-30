import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Done from "./components/Done";
import InputArea from "./components/InputArea";
import { ThemeContext } from "./context/ThemeContext";

const item = JSON.parse(localStorage.getItem("todo"));
const number = localStorage.getItem("number");
console.log("사이드이펙트");

function App() {
  console.log("App컴포넌트 맨위");
  const [todos, setTodos] = useState(item || []);
  const [count, setCount] = useState(number || 0);

  useEffect(() => {
    console.log("유즈이펙트");
    localStorage.setItem("todo", JSON.stringify(todos));
    localStorage.setItem("number", count);
  }, [todos, count]);

  return (
    <ThemeContext.Provider value={{ todos, setTodos, count, setCount }}>
      <div className="layout">
        <Navbar />
        <InputArea />
        <section className="todo-list">
          <h2>NOT DONE</h2>
          <div className="not-done">
            {todos.map((a) => {
              let { isDone, id } = a;
              return !isDone ? (
                <Done state={"완료"} user={a} key={`title+${id}`} />
              ) : null;
            })}
          </div>
          <h2>DONE</h2>
          <div className="done">
            {todos.map((a) => {
              let { isDone, id } = a;
              return isDone ? (
                <Done state={"취소"} user={a} key={`title+${id}`} />
              ) : null;
            })}
          </div>
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
